export const filterTypeSelected = state => state.notifications.filter;

export const getNotifications = state => state.notifications.list;

export const getUnreadNotifications = state =>
  state.notifications.list.filter(notification => !notification.read);
