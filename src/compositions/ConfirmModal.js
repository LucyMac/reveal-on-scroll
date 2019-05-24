import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/modal';

function confirmModal(WrappedComponent, submitAction, redirectLocation, modalKey='confirm') {
  class ConfirmModal extends React.Component {
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
     * Action once admin confirms modal
     */
    confirmAction() {
      const { itemId, submitAction, history } = this.props;
      return submitAction(itemId).then(() => {
        if (redirectLocation) {
          history.push(redirectLocation);
        }

        this.cancelAction();
      });
    }

    render() {
      const { 
        isVisible
      } = this.props;

      // Conditionally display the modal based on container
      if (!isVisible) {
        return null;
      }

      return (
        <WrappedComponent
          submitAction={this.confirmAction}
          cancelAction={this.cancelAction}
        />
      );
    }
  }

  const mapStateToProps = state => ({});

  return connect(
    mapStateToProps, 
    {
      toggleModal,
      submitAction
    }
  )(ConfirmModal);
}

export default confirmModal;
