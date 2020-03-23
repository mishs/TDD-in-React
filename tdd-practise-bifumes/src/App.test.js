import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
//setting up Enzyme
import { configure, shallow } from "enzyme"; //configure for the Enzyme setting up and shallow -enzyme function that creates an instance of your component as a unit without mistakenly asserting behaviou of child components
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() }); //adapter has to be the new version of the imported

//jest API methods that organises test code in blocks vs test method
describe("Counter testing", () => {
  test("renders the title of the counter", () => {
    const wrapper = shallow(<App />); //Naming 'wrapper is a convention you can name it anything you want. And shallow insures though they be children inside app (like commented out Header App element), it won't look into them.
    //console.log(wrapper.debug()); //to see what's inside the wrapper
    expect(wrapper.find("hi").text()).toContain("This is counter app");
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/This is a counter app/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("render button with text `increment`", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
});
