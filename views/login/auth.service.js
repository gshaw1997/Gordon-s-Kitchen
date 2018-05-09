import {
    AUTH_ROUTES
} from "../../environment/routes";
import {
    AsyncStorage
} from 'react-native';

import * as axios from 'axios';

export class AuthService {
    options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    register(username, password) {
        return axios.post(AUTH_ROUTES.REGISTER, {
            username,
            password
        }).then(async (res) => {
            const user = res.data;
            await this.setUser(user);
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    login(username, password) {
        return axios.post(AUTH_ROUTES.LOGIN, {
            username,
            password
        }).then(async (res) => {
            const user = res.data;
            await this.setUser(user);
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    async setUser(user) {
        try {
            await AsyncStorage.setItem('@UserStore:user', JSON.stringify(user));
        } catch (e) {
            console.log('Could not save user', e)
        }
    }
    async getUser() {
        try {
            const user = await AsyncStorage.getItem('@UserStore:user');
            return JSON.parse(user);
        } catch (e) {
            console.log('Could not load user', e)
        }
    }
}