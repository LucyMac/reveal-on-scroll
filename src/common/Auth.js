import { get } from 'lodash';
import auth0 from 'auth0-js';

export default class Auth {
  auth0;
  authCredits = {
    domain: null,
    clientID: null,
    audience: null,
    appDomain: null,
    hostname: null,
    responseType: 'token id_token',
    scope: 'openid profile email',
  };
  tokenRenewalTimeout;
  adminProfile;

  /**
   * Set auth details
   *
   * @param {object} authDetails
   */
  setAuthDetails = authDetails => {
    const audience = get(authDetails, 'audience');
    const domain = get(authDetails, 'domain');
    const hostname = get(authDetails, 'hostname');
    const namespace = get(authDetails, 'namespace') || `https://${domain}`;
    const clientID = get(authDetails, 'portalClientId');
    const redirectUri =
      window.location.host === 'localhost:3000'
        ? 'http://localhost:3000/callback'
        : `${hostname}/callback`;

    // Merge auth details
    this.authCredits = Object.assign(this.authCredits, {
      audience,
      domain,
      hostname,
      namespace,
      clientID,
      redirectUri,
    });

    this.auth0 = new auth0.WebAuth(this.authCredits);
    this.scheduleRenewal();
  };

  login = () => {
    this.auth0.authorize();
  };

  /**
   * Handle authentication
   *
   * @param {object} history
   * @param {object} dispatch
   */
  handleAuthentication = (history, dispatch) => {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // dispatch(getAuthACL());
      } else if (error) {
        localStorage.removeItem('auth');
        console.log(error);
      }
    });
  };

  /**
   * Set session
   *
   * @param {*} authResult
   */
  setSession = authResult => {
    const roleNameSpace = `${this.authCredits.namespace}/roles`;
    const adminDataNamespace = `${this.authCredits.namespace}/admin_metadata`;
    const appData = authResult.idTokenPayload[roleNameSpace];
    const adminData = authResult.idTokenPayload[adminDataNamespace];
    const accessToken = get(authResult, 'accessToken');
    const idToken = get(authResult, 'idToken');
    const expiresIn = get(authResult, 'expiresIn');
    const expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    const roles = get(appData, 'roles') || [];
    const id = get(authResult, 'idTokenPayload.sub');
    const email = get(adminData, 'email');
    const admin = { id, email };

    const data = {
      accessToken,
      idToken,
      expiresAt,
      roles,
      admin,
    };

    localStorage.setItem('auth', JSON.stringify(data));
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);

    // schedule a token renewal
    this.scheduleRenewal();
  };

  /**
   * Get access token
   */
  getAccessToken = () => {
    const auth = localStorage.getItem('auth');
    const accessToken = JSON.parse(auth).accessToken;
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  };

  /**
   * Get profile
   *
   * @param {*} cb
   */
  getProfile = cb => {
    const accessToken = this.getAccessToken();
    this.auth0.client.adminInfo(accessToken, (err, profile) => {
      if (profile) {
        this.adminProfile = profile;
      }
      cb(err, profile);
    });
  };

  /**
   * Logout
   */
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('auth');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.adminProfile = null;
    clearTimeout(this.tokenRenewalTimeout);
  };

  /**
   * Is authenticated
   */
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  /**
   * Renew token
   */
  renewToken = () => {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      } else {
        this.setSession(result);
        console.log('Successfully renewed access token');
      }
    });
  };

  /**
   * Schedule renewal
   */
  scheduleRenewal = () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  };
}
