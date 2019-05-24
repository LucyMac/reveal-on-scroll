import React from 'react';
import PropTypes from 'prop-types';

function withForm(WrappedComponent, entity) {
  class WithForm extends React.Component {
    constructor(props) {
      super(props);

      this.handleSave = this.handleSave.bind(this);
    }

    /**
     * Redirect action
     */
    saveCallback() {
      const { 
        initialValues,
        history
      } = this.props;
      const id = (initialValues && initialValues.id) || null

      let url = `/${entity}`;

      if (id) {
        url = `${url}/${initialValues.id}`;
      }

      history.push(url);
    }

    /**
     * Create or Update
     * 
     * @param {*} values 
     */
    handleSave = (values) => {
      const { 
        saveAction,
      } = this.props;

      saveAction(values).then(() => {
        // Handle the callback once save has actioned
        this.saveCallback();
      });
    }

    render() {
      return (<WrappedComponent
        {...this.props}
        onSubmit={this.handleSave}
      />);
    }
  }

  WithForm.defaultProps = {
    initialValues: {},
  }

  WithForm.propTypes = {
    saveAction: PropTypes.func.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object
  }

  return WithForm;
}

export default withForm;
