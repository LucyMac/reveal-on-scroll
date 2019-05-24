import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/modal';

function saveModal(
  WrappedComponent, 
  dataKey,
  modalKey) {

  class SaveModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      
      this.cancelAction = this.cancelAction.bind(this);
      this.confirmAction = this.confirmAction.bind(this);
    }

    /**
     * Hides Confirm Modal
     */
    cancelAction() {
      const { toggleModal } = this.props;

      return toggleModal(modalKey, false);
    }

    /**
     * Action once modal is confirmed
     */
    confirmAction() {
      this.props.handleCallback(dataKey);
      this.cancelAction();
    }

    render() {
      const { 
        isVisible,
        newRequestedValue
      } = this.props;

      // Conditionally display the modal based on container
      if (!isVisible) {
        return null;
      }

      return (
        <WrappedComponent
          submitAction={this.confirmAction}
          cancelAction={this.cancelAction}
          newRequestedValue={newRequestedValue}
        />
      );
    }
  }

  const mapStateToProps = state => ({});

  return connect(
    mapStateToProps, 
    {
      toggleModal,
    }
  )(SaveModal);
}

export default saveModal;
