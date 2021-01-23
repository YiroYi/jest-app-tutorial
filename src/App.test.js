import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {

});

test("renders counter display", () => {

});

test("counter starts at 0", () => {

});

test("clicking on button increments counter dipslay", () => {

});

/*TDD es primero hacer los test de lo que quieres que
haga tu app , por ejemplo podrias ser el pseudo code
y de ahi comenza con el ejemplo de arriba basicamente
escribiste el pseudo code de lo que quieres que la
interfase haga*/
