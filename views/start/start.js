import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './start.styles';
import {DishService} from '../../shared/DishService';

export default class StartScreen extends React.Component {
    dishService = new DishService();

    constructor(props) {
        super(props);
        this.state = {
            dishID: this
                .props
                .navigation
                .getParam('dishID', null),
            dish: null,
            loaded: false
        }
    }

    async componentWillMount() {
        try {

            const dish = await this
                .dishService
                .getDish(this.state.dishID);

                console.log('DISH: ', dish)

            this.setState({dish, loaded: true});

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return this.state.loaded
            ? (
                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.narrationText}>
                            {this.state.dish.prompts.intro[0].text}
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.chefGordon}
                            source={require('../../assets/images/chef-gordon.png')}/>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.speakingText}>
                            {this.state.dish.prompts.intro[1].text
}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={styles.quitButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.quitButtonImage]}
                                source={require('../../assets/images/quit-button.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ChoicesLevel', {dish: this.state.dish})}
                            style={styles.nextButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.nextButtonImage]}
                                source={require('../../assets/images/next-button.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : null;
    }
}
