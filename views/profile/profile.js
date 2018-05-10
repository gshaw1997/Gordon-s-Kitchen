import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {styles} from './profile.styles';
import {AuthService} from '../login/auth.service';

export default class ProfileScreen extends React.Component {
    authService = new AuthService();
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    }
    async componentDidMount() {
        try {
            const user = await this
                .authService
                .getUser();
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
            </View>
        );
    }
}
