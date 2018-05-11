import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {styles} from './profile.styles';
import {AuthService} from '../login/auth.service';
import {UserService} from '../../shared/UserService';
import * as moment from 'moment';
export default class ProfileScreen extends React.Component {
    authService = new AuthService();
    userService = new UserService();
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isSelf: false,
            loaded: false,
            progressPercent: 0
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
                this.setState({isSelf: true})
            }


            const friends = await this.userService.getFriends(user.id);
            user.friends = friends;

            this.setState({user, loaded: true})
            if(this.state.isSelf){
                this.calculateProgressPercent();
            }
        } catch (e) {
            console.log(e)
        }
    }

    calculateProgressPercent(){
        let percent = 0;
        if(this.state.user.level.nextLevel){
        const currXP = this.state.user.totalXp;
        const xpNeeded = this.state.user.level.nextLevel.xpNeeded;

         percent =  Math.floor(((currXP/xpNeeded) * 100));
        }else{
            percent = 100
        }
        

        this.setState({progressPercent: percent});
    }

    render() {
        if(this.state.loaded){
            const options = {
                month: 'long',
                day: 'numeric',
            }
            const createdOnTime = new Date(+this.state.user.accountHistory.createdOn).toLocaleTimeString('en-US');
            var createdOn = new Date(+this.state.user.accountHistory.createdOn).toLocaleString('en-US').replace(createdOnTime, '');

            const lastSignedOnTime = new Date(+this.state.user.accountHistory.lastSignedOn).toLocaleTimeString('en-US');
            var lastSignOn = new Date(+this.state.user.accountHistory.lastSignedOn).toLocaleString('en-US').replace(lastSignedOnTime, '');
        }
        return this.state.loaded
            ? (
                <View style={[styles.container]}>
                    <View style={styles.profileHeader}>
                        <Image
                            resizeMode="contain"
                            style={styles.chefHat}
                            source={require('../../assets/images/chef-hat.png')}/>
                            {!this.state.isSelf && <Text style={[styles.defaultTxt, styles.usernameTxt]}>
                                {this.state.user.username}
                            </Text>}
                        <Text style={styles.progressTxt}>
                            PROGRESS
                        </Text>
                    </View>
                    <View style={styles.progressWrapper}>
                        <View style={styles.progressMeta}>
                            <Text style={[styles.progressMetaTxt]}>
                                {this.state.isSelf ? `${this.state.progressPercent}%`: ''}
                            </Text>
                            <Text style={[styles.progressMetaTxt, styles.progressMetaTxtLarge]}>
                                Level {this.state.user.level.number}
                            </Text>
                            <Text style={[styles.progressMetaTxt, styles.progressMetaTxtSmall]}>
                                {this.state.isSelf && this.state.user.level.nextLevel ? `${this.state.user.totalXp}/${this.state.user.level.nextLevel.xpNeeded}` : ''}
                                {this.state.isSelf && !this.state.user.level.nextLevel ? `${this.state.user.totalXp} XP` : ''}
                            </Text>
                        </View>
                        {this.state.isSelf && <View style={styles.progressBarWrapper}>
                            <View style={[styles.progressBar, {width: `${this.state.progressPercent}%`}]}></View>
                        </View>}
                    </View>
                    {<View style={[styles.flexColumn]}>
                        <Text style={[styles.defaultTxt, styles.centerTxt, styles.levelName]}>{ this.state.user.level.name}</Text>
                        {this.state.isSelf && <Text style={[styles.defaultTxt, styles.centerTxt]}>{ this.state.user.level.description}</Text>}
                    </View>}
                    <View style={[styles.flexColumn, styles.history]}>
                        <Text style={[styles.defaultTxt, styles.centerTxt]}>{this.state.isSelf ? 'Player since': 'Last signed on'}</Text>
                        <Text style={[styles.defaultTxt, styles.centerTxt]}>{this.state.isSelf ? createdOn : lastSignOn}</Text>
                    </View>
                    <View style={[styles.statWrapper]}>
                        <TouchableOpacity 
                        style={[styles.flexColumn, styles.statBox]}
                        onPress = {
                            () => this.props.navigation.navigate('Completions', {
                                completed: this.state.user.completed
                            })
                        } >
                            <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatNum]}>{this.state.user.completed.length}</Text>
                            <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatTxt]}>Completion{this.state.user.completed.length === 1
                                    ? ''
                                    : 's'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.flexColumn, styles.statBox]}
                            onPress={() => this.props.navigation.navigate('Friends', {friends: this.state.user.friends, isSelf: this.state.isSelf})}>
                            <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatNum]}>{this.state.user.friends.length}</Text>
                            <Text style={[styles.defaultTxt, styles.centerTxt, styles.playStatTxt]}>Friend{this.state.user.friends.length === 1
                                    ? ''
                                    : 's'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomWrapper}>
                        {this.state.isSelf && <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => this.authService.logout(this.props.navigation)}>
                            <Text
                                style={[styles.defaultTxt, styles.buttonTxt]}userID
                                >Logout</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => this.state.isSelf ? this.props.navigation.navigate('Home') : this.props.navigation.goBack()}>
                            <Text
                                style={[styles.defaultTxt, styles.buttonTxt]}
                                >Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : null;
    }
}
