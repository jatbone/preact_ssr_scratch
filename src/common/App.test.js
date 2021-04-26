import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";
import App from "./App";
/** @jsx h */

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });
});
