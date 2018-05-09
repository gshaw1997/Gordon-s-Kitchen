import {
  environment
} from './environment';

export const AUTH_ROUTES = {
  REGISTER: `${environment.apiURL}/users`,
  LOGIN: `${environment.apiURL}/users/login`
};

export const USER_ROUTES = {

}

export const DISH_ROUTES = {
  GET_DISHES_AT_LEVEL: function (level) {
    return `${environment.apiURL}/dishes/difficulty/${level}`
  },
  GET_DISH: function (id) {
    return `${environment.apiURL}/dishes/${id}`
  }
}