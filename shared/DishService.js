import {
    DISH_ROUTES
} from "../environment/routes";

import * as axios from 'axios';

export class DishService {
    getDishes(level) {
        return axios.get(DISH_ROUTES.GET_DISHES_AT_LEVEL(level)).then((res) => {
            const dishes = res.data;
            return dishes;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    getDish(id) {
        return axios.get(DISH_ROUTES.GET_DISH(id)).then((res) => {
            const dish = res.data;
            console.log('DISH: ', dish)
            return dish;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
}