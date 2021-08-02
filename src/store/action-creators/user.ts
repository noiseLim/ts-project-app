import { Dispatch } from 'redux';
import axios from 'axios';

import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'oops, something went wrong',
      });
    }
  };
};
