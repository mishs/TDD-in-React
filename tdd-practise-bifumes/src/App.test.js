import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//jest API methods that organises test code in blocks vs test method
describe("Counter testing", () => {
  test("renders the title of the counter", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/This is a counter app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
