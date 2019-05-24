/**
 * Default Required validation
 */
export const required = value =>
  value === undefined || value === null || value === '' ? 'Required' : undefined;

/**
/**
 * Default Number validation
 */
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

/**
 * Validates an email address
 */
export const validEmail = value =>
  value &&
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? 'Invalid email address'
    : undefined;

/**
 * Validates a URL
 */
export const validUrl = value =>
  value && !/((ftp|https?):\/\/)?[a-z0-9\-.]{3,}\.[a-z]{3}$/.test(value)
    ? 'Invalid web address'
    : undefined;

/**
 * Validates a URL matches YouTube
 */
export const validYouTubeUrl = value =>
  value && !/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(value)
    ? 'Invalid YouTube address'
    : undefined;

/**
 * Validates UK Postcode
 */
export const validPostcode = value =>
  value &&
  !/(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/.test(
    value.toUpperCase()
  )
    ? 'Invalid postcode'
    : undefined;

/**
 * Validates UK Mobile No.
 */
export const validMobileNo = value =>
  value &&
  !/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/.test(
    value
  )
    ? 'Invalid mobile number'
    : undefined;

/**
 * Validates UK Phone No.
 */
export const validHomeTel = value =>
  value &&
  !/^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/.test(
    value
  )
    ? 'Invalid telephone number'
    : undefined;

/**
 * Validates National Insurance
 */
export const validNationalInsurance = value =>
  value &&
  !/^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z](?:\s*\d{2}){3}\s*[A-D]$/.test(
    value.toUpperCase()
  )
    ? 'Invalid National Insurance number'
    : undefined;

/**
 * Validates Bank Account Number
 */
export const validBankAccountNo = value =>
  value && (value.length > 8 || value.length) < 8
    ? 'Invalid bank account number'
    : undefined;

/**
 * Validates Sort Code
 */
export const validBankSortCode = value =>
  value && (value.length > 6 || value.length) < 6
    ? 'Invalid sort code'
    : undefined;

/**
 * Validates number field
 * to match DB requirements for specific fields
 *
 * @param {} value
 */
export const validIntField = value =>
  value && value.length > 10 ? 'Must be below 10 digits' : undefined;

/**
 * Validates pay rate field to be greater than zero
 */
export const validMinValue = min => value =>
  value && value <= min ? 'Must be greater than zero' : undefined;

/**
 * Validates max character length
 */
export const validMaxLength = value =>
  value && value.length > 3 ? 'Maximum character limit is 3' : undefined;

/**
 * Formats number to accept only one decimal point and digits
 *
 * @param {*} value
 */
export const onlyDecimal = value => {
  if (value) {
    let n = String(value).replace(/[^0-9.]+/, '');
    if (n.split('.').length > 2) {
      n = n.replace(/\.+$/, '');
    }

    return n;
  }
  return value || '';
};

/**
 * Validates employeeId field
 * to match DB requirements of smaller than 9 digits
 *
 * @param {} value
 */
export const validEmployeeId = value =>
  value && value.length > 8 ? 'Must be no longer than 8 digits' : undefined;
