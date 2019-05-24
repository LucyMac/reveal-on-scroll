import React from 'react';

import { shallow, mount } from 'enzyme';

import FilterableList from '../FilterableList';
import AdminsFilterBar from '../../components/Admins/AdminsFilterBar';

const Component = () => {
  return <input type="text" name="test"></input>
};

const exampleFunction = jest.fn();

describe("FilterableList", () => {

  it('should render the component', () => {
    const ConditionalComponent = FilterableList(Component, exampleFunction);

    const wrapper = shallow(<ConditionalComponent />);

    expect(wrapper).not.toBe(null)
  });

  it('should run passed through function on handleChange', () => {

    const ConditionalComponent = FilterableList(Component, exampleFunction);

    const wrapper = shallow(<ConditionalComponent />);

    wrapper.filerAction = exampleFunction;

    wrapper.instance().handleChange();

    expect(exampleFunction).toHaveBeenCalled();
  })

});