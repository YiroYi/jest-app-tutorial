import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);

const findByTestAttibute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttibute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttibute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttibute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttibute(wrapper, "count").text(); //Estoy nos trae el node que buscamos un nodo es un elemento del dom
  expect(count).toBe("0");
});

test("clicking on button increments counter dipslay", () => {
  //find the button
  const wrapper = setup();
  const button = findByTestAttibute(wrapper, "increment-button");
  //click the button
  button.simulate('click');
  //find the display and test that the number has been incremented
  const count = findByTestAttibute(wrapper, "count").text();
  expect(count).toBe("1");
});

test("render decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttibute(wrapper, "decrease-button");
  expect(decrementButton.length).toBe(1);
});

test("on click button should decrement counter", () => {
  //find decrement button
  const wrapper = setup();
  const decrementButton = findByTestAttibute(wrapper, "decrease-button");
  //click button
  decrementButton.simulate('click');
  //find display and make sure number has decrement
  const count = findByTestAttibute(wrapper, "count").text();
  expect(count).toBe("-1");
});

// test("if count is zero can't not decrease",() => {
//   //find decrement span
//   const wrapper = setup();
//   const count = findByTestAttibute(wrapper, "count").text();
//   //click button

//   //if result is -1 error
// });

/*TDD es primero hacer los test de lo que quieres que
haga tu app , por ejemplo podrias ser el pseudo code
y de ahi comenza con el ejemplo de arriba basicamente
escribiste el pseudo code de lo que quieres que la
interfase haga*/
