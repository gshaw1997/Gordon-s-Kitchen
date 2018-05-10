import {
    AuthService
} from "../views/login/auth.service";
import * as axios from 'axios';
import {
    USER_ROUTES
} from "../environment/routes";

export class UserService {
    authService = new AuthService();
    getUser(userID) {
        return axios.get(USER_ROUTES.GET_USER(user)).then(async (res) => {
            const user = res.data;
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    getFriends(userID) {
        return axios.get(USER_ROUTES.GET_USERS_FRIENDS(userID)).then(async (res) => {
            const friends = res.data;
            return friends;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    addCompletion(userID, dishID, score) {
        return axios.post(USER_ROUTES.ADD_COMPLETION(userID), {
            dishID,
            score
        }).then(async (res) => {
            const user = res.data;
            await this.authService.setUser(user);
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
}