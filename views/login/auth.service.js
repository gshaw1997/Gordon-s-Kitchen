import {
    AUTH_ROUTES
} from "../../environment/routes";
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
        }).then((res) => {
            const user = res.data;
            console.log('USER: ', user)
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
    login(username, password) {
        return axios.post(AUTH_ROUTES.LOGIN, {
            username,
            password
        }).then((res) => {
            const user = res.data;
            console.log('USER: ', user)
            return user;
        }).catch(e => {
            return Promise.reject(e.response.data);
        })
    }
}