import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {styles} from './profile.styles';
import {AuthService} from '../login/auth.service';
import {UserService} from '../../shared/UserService';
export default class ProfileScreen extends React.Component {
    authService = new AuthService();
    userService = new UserService();
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isSelf: false
        }

    }
    async componentDidMount() {
        try {
            const userID = this
                .props
                .navigation
                .getParam('userID', null);
            let user;
            if (userID) {
                user = await this
                    .userService
                    .getUser(userID);
            } else {
                user = await this
                    .authService
                    .getUser();
            }

            const friends = await this
                .userService
                .getFriends(user.id);
            user.friends = friends;

            this.setState({user})
        } catch (e) {
            console.log(e)
        }
    }
    
    render() {
        return (
            <View style={[styles.container]}>
                <View style={styles.profileHeader}>
                    <Image
                        resizeMode="contain"
                        style={styles.chefHat}
                        source={require('../../assets/images/chef-hat.png')}/>
                    <Text style={styles.progressTxt}>
                        PROGRESS
                    </Text>
                </View>
                <View style={styles.progressWrapper}>
                    <View style={styles.progressMeta}>
                        <Text style={[styles.progressMetaTxt]}>
                            48%
                        </Text>
                        <Text style={[styles.progressMetaTxt, styles.progressMetaTxtLarge]}>
                            Level 1
                        </Text>
                        <Text style={[styles.progressMetaTxt, styles.progressMetaTxtSmall]}>
                            480/1000
                        </Text>
                    </View>
                    <View style={styles.progressBarWrapper}>
                        <View style={styles.progressBar}></View>
                    </View>
                </View>
                <View style={[styles.flexColumn]}>
                    <Text style={[styles.defaultTxt, styles.centerTxt, styles.levelName]}>You're a competent chef</Text>
                </View>
                <View style={[styles.flexColumn]}>
                    <Text style={[styles.defaultTxt, styles.centerTxt]}>Player since</Text>
                    <Text style={[styles.defaultTxt, styles.centerTxt]}>April 4, 2018</Text>
                </View>
                <View style={[styles.statWrapper]}>
                    <View style={[styles.flexColumn, styles.statBox]}>
                        <Text style={[styles.defaultTxt, styles.centerTxt]}>5</Text>
                        <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatTxt]}>Completions</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.flexColumn, styles.statBox]}
                        onPress={() => this.props.navigation.navigate('Friends')}>
                        <Text style={[styles.defaultTxt, styles.centerTxt]}>2</Text>
                        <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatTxt]}>Friends</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomWrapper}>
                    <TouchableOpacity style={[styles.button, styles.logoutButton]}>
                        <Text
                            style={[styles.defaultTxt, styles.buttonTxt]}
                            onPress={() => this.authService.logout(this.this.props.navigation)}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.backButton]}>
                        <Text
                            style={[styles.defaultTxt, styles.buttonTxt]}
                            onPress={() => this.props.navigation.navigate('Home')}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
