import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component tests", () => {
  it("does not rerender when props are updated with the same list", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const shouldUpdate = instance.shouldComponentUpdate({ listNotifications });

    expect(shouldUpdate).toBe(false);
  });

  it("rerenders when props are updated with a longer list", () => {
    const listNotifications1 = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const listNotifications2 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications1} />);
    const instance = wrapper.instance();
    const shouldUpdate = instance.shouldComponentUpdate({ listNotifications: listNotifications2 });

    expect(shouldUpdate).toBe(true);
  });
});
