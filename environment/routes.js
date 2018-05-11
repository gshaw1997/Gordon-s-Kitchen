import {
  environment
} from './environment';

export const AUTH_ROUTES = {
  REGISTER: `${environment.apiURL}/users`,
  LOGIN: `${environment.apiURL}/users/login`
};

export const USER_ROUTES = {
  GET_USER: function (userID) {
    return `${environment.apiURL}/users/${userID}`;
  },
  GET_USERS_FRIENDS: function (userID) {
    return `${environment.apiURL}/users/${userID}/friends`;
  },
  ADD_FRIEND: function (userID) {
    return `${environment.apiURL}/users/${userID}/friends`;
  },
  REMOVE_FRIEND: function (userID, playerID) {
    return `${environment.apiURL}/users/${userID}/friends/${playerID}`;
  },
  FIND_USER: function (username) {
    return `${environment.apiURL}/users?username=${username}`;
  },
  ADD_COMPLETION: function (userID) {
    return `${environment.apiURL}/users/${userID}/completed`;
  }
}

export const DISH_ROUTES = {
  GET_DISHES_AT_LEVEL: function (level) {
    return `${environment.apiURL}/dishes/difficulty/${level}`
  },
  GET_DISH: function (id) {
    return `${environment.apiURL}/dishes/${id}`
  }
}