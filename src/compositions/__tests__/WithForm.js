import React from 'react';

import { shallow, mount } from 'enzyme';

import WithForm from '../WithForm';
import AdminDetailsForm from '../../components/Admin/AdminDetailsForm';

const exampleFunction = jest.fn();

describe("WithForm", () => {

  it('should render the component', () => {
    const WrappedComponent = WithForm(AdminDetailsForm);

    const wrapper = shallow(<WrappedComponent saveAction={exampleFunction} />);

    expect(wrapper).not.toBe(null)
  });

  it('should run passed through function on handleSave', () => {

    const WrappedComponent = WithForm(AdminDetailsForm);

    const wrapper = shallow(<WrappedComponent saveAction={exampleFunction} />);

    wrapper.handleSave = exampleFunction;

    wrapper.instance().handleSave();

    expect(exampleFunction).toHaveBeenCalled();
  })

});