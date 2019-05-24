import React from 'react';

function filterableList(WrappedComponent, filerAction) {
  class FilterableList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      console.log("HANDLE CHANGE ACTION")

      filerAction();

      // Do something filtering based
      // by dispatching to the redux action
      // also debounce the requests to prevent multi
    }

    render() {
      return (
        <WrappedComponent
          handleChange={this.handleChange}
        />
      );
    }
  }

  return FilterableList;
}

export default filterableList;
