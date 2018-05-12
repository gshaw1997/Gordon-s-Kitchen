import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './reward-summary.styles';
import {AuthService} from '../login/auth.service';
import {UserService} from '../../shared/UserService';

export default class RewardSummaryScreen extends React.Component {
    authService = new AuthService();
    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {
            dish: this
                .props
                .navigation
                .getParam('dish', null),
            penalties: this
                .props
                .navigation
                .getParam('penalties', null),
            reward: 0,
            user: null,
            loaded: false
        }
    }

    async componentWillMount() {
        try {
            const reward = this.getReward();
            this.setState({reward})

            let user = await this
                .authService
                .getUser();
            user = await this
                .userService
                .addCompletion(user.id, this.state.dish.id, reward);
            this.setState({user});
            this.setState({loaded: true})
        } catch (e) {
            console.log(e)
        }
    }

    getReward() {
        let xp = 0;
        for (const reward of this.state.dish.rewards) {
            if (reward.penalties === this.state.penalties) {
                xp = reward.reward;
                return xp;
            }
        }
        return xp;
    }
    render() {
        return this.state.loaded
            ? (
                <View style={styles.container}>
                    <View style={styles.penaltyBox}>
                        {this.state.penalties > 2
                            ? <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/surprised-gordon.png')}/>
                            : <Image
                                resizeMode="contain"
                                style={[styles.penalty]}
                                source={require('../../assets/images/chef-gordon.png')}/>
}
                        {this.state.penalties > 1
                            ? <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/surprised-gordon.png')}/>
                            : <Image
                                resizeMode="contain"
                                style={[styles.penalty]}
                                source={require('../../assets/images/chef-gordon.png')}/>
}
                        {this.state.penalties > 0
                            ? <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/surprised-gordon.png')}/>
                            : <Image
                                resizeMode="contain"
                                style={[styles.penalty]}
                                source={require('../../assets/images/chef-gordon.png')}/>
}
                    </View>
                    <View style={styles.centerText}>
                        <Text style={styles.message}>CRUDE MESSAGE</Text>
                    </View>
                    <View style={styles.centerText}>
                        <Text style={styles.title}>Reward</Text>
                        <Text style={styles.reward}>{this.state.reward}
                            XP</Text>
                    </View>
                    <View style={styles.centerText}>
                        <Text style={styles.title}>Progress</Text>
                        <Text style={styles.progress}>Level {this.state.user.level.number}: {this.state.user.level.description}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DishSelect', {difficulty: this.state.dish.difficulty})}
                        style={styles.nextButton}>
                        <Image
                            resizeMode="contain"
                            style={[styles.button, styles.nextButtonImage]}
                            source={require('../../assets/images/next-button.png')}/>
                    </TouchableOpacity>
                </View>
            )
            : null;
    }
}
