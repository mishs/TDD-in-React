// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme"; //configure for the Enzyme setting up and shallow -enzyme function that creates an instance of your component as a unit without mistakenly asserting behaviou of child components
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() }); //adapter has to be the new version of the imported
