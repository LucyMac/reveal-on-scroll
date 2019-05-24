import React from 'react';
import PropTypes from 'prop-types';

import { toggleModal } from '../actions/modal'

function withModal(WrappedComponent, type) {
  class WithModal extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

      };
    }

    openModal() {
      
    }

    render() {
      return (<WrappedComponent />);
    }
  }

  WithModal.defaultProps = {
    initialValues: {},
  }

  WithModal.propTypes = {
    toggleModal: PropTypes.func.isRequired
  }

  return WithModal;
}

export default withModal;
