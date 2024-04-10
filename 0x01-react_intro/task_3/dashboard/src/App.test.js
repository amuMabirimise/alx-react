import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBeTruthy();
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBeTruthy();
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBeTruthy();
  });
});