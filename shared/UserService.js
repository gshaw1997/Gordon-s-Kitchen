import {
    AuthService
} from "../views/login/auth.service";
import * as axios from 'axios';
import {
    USER_ROUTES
} from "../environment/routes";

export class UserService {
    authService = new AuthService();
    findUser(username) {
        return axios.get(USER_ROUTES.FIND_USER(username)).then(async (res) => {
            const users = res.data;
            return users;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    getUser(userID) {
        return axios.get(USER_ROUTES.GET_USER(userID)).then(async (res) => {
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
    addFriend(userID, playerID) {
        return axios.post(USER_ROUTES.ADD_FRIEND(userID), {
            playerID
        }).then(async (res) => {
            const friends = res.data;
            return friends;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    removeFriend(userID, playerID) {
        return axios.delete(USER_ROUTES.REMOVE_FRIEND(userID, playerID)).then(async (res) => {
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