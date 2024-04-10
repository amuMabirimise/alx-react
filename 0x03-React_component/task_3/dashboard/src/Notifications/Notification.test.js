import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders correct number of NotificationItem components", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: "test" } }
    ];
    const notification = shallow(<Notifications listNotifications={listNotifications} />);

    expect(notification.find(NotificationItem)).toHaveLength(3);
  });

  it("calls markAsRead function when NotificationItem is clicked", () => {
    const listNotifications = [{ id: 1, type: "default", value: "New course available" }];
    const markAsRead = jest.fn();
    const notification = shallow(
      <Notifications listNotifications={listNotifications} />
    );

    notification.find(NotificationItem).simulate("click");
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
