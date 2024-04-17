import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it("should call console.log with Component when wrapped element is pure html", () => {
    const WrappedComponent = WithLogging(() => <div>Hello</div>);
    mount(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith("Component is mounted");
  });

  it("should call console.log with the name of the component when wrapped element is Login component", () => {
    const Login = () => <div>Login component</div>;
    Login.displayName = "Login";
    const WrappedComponent = WithLogging(Login);
    mount(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");
  });
});
