/**
 * constants
 */
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

/**
 * action creators
 */
export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersSuccess = (data) => ({type: FETCH_USERS_SUCCESS, data });
export const fetchUsersFail = () => ({ type: FETCH_USERS_FAIL });
