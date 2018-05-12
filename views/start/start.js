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
                            {this.state.dish.prompts.intro[0]
                                ? this.state.dish.prompts.intro[0].text
                                : `A muscular man in a white apron approaches you, staring. You stand awkwardly. He speaks.`
}
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.chefGordon}
                            source={this.state.dish.prompts.intro[0] && this.state.dish.prompts.intro[0].image
                            ? {
                                uri: this.state.dish.prompts.intro[0].image
                            }
                            : require('../../assets/images/chef-gordon.png')}/>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.speakingText}>
                            {this.state.dish.prompts.intro[1]
                                ? this.state.dish.prompts.intro[1].text
                                : `"So you think you can cook? We'll see about that."`
}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DishSelect', {difficulty: this.state.dish.difficulty})}
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
