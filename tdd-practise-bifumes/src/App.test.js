import React from "react";
//setting up Enzyme
import { shallow } from "enzyme"; //configure for the Enzyme setting up and shallow -enzyme function that creates an instance of your component as a unit without mistakenly asserting behaviou of child components
import Counter from "./Counter";

//jest API methods that organises test code in blocks vs test method
describe("Counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />); //Naming 'wrapper is a convention you can name it anything you want. And shallow insures though they be children inside app (like commented out Header App element), it won't look into them.
    //console.log(wrapper.debug()); //to see what's inside the wrapper
  });
  test("render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is a counter app");
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/This is a counter app/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render initial state value in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render event on button click and increases counter value", () => {
    wrapper.find("#increment-btn").simulate("click"); //find button and respond to click
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render event on button click and decreases counter value", () => {
    // first increment in case it be zero on start
    wrapper.find("#increment-btn").simulate("click"); //find button and respond to click
    expect(wrapper.find("#counter-value").text()).toBe("1");
    // now decrement
    wrapper.find("#decrement-btn").simulate("click"); //find button and respond to click
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
