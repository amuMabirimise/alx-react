// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const initialState = {
    notifications: {
      filter: 'all',
      list: [
        { id: 1, message: 'Notification 1', read: false },
        { id: 2, message: 'Notification 2', read: true },
        { id: 3, message: 'Notification 3', read: false }
      ]
    }
  };

  it('should return the correct filter type selected', () => {
    const result = filterTypeSelected(initialState);
    expect(result).toEqual('all');
  });

  it('should return all notifications', () => {
    const result = getNotifications(initialState);
    expect(result).toEqual([
      { id: 1, message: 'Notification 1', read: false },
      { id: 2, message: 'Notification 2', read: true },
      { id: 3, message: 'Notification 3', read: false }
    ]);
  });

  it('should return unread notifications', () => {
    const result = getUnreadNotifications(initialState);
    expect(result).toEqual([
      { id: 1, message: 'Notification 1', read: false },
      { id: 3, message: 'Notification 3', read: false }
    ]);
  });
});
