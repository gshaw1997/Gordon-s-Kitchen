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
            loaded: false,
            intro1: null,
            intro2: null,
            intro1Done: false,
            textAnimationDone: false
        }
    }
/**
 * Before screen renders
 * 
 * @memberof StartScreen
 */
async componentWillMount() {
        try {

            const dish = await this
                .dishService
                .getDish(this.state.dishID);

            console.log('DISH: ', dish)

            this.setState({dish, loaded: true});
            this.startTextAnimation();

        } catch (e) {
            console.log(e)
        }
    }
/**
 * Start Text Animation
 * 
 * @memberof StartScreen
 */
async startTextAnimation() {
        const animationSpeed = 75;
        const pauseSpeed = 200;
        const txt1 = (this.state.dish.prompts.intro[0]
            ? this.state.dish.prompts.intro[0].text
            : `A muscular man in a white apron approaches you, staring. You stand awkwardly. He speaks.`).split('');
        let intro1 = '';

        const txt2 = (this.state.dish.prompts.intro[1]
            ? this.state.dish.prompts.intro[1].text
            : `"So you think you can cook? We'll see about that."`).split('');
        let intro2 = '';

        for (const char of txt1) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    intro1 += char;
                    this.setState({intro1});
                    if (char === '.' || char === '.' || char === '!' || char === '?') {
                        setTimeout(() => {
                            resolve();
                        }, pauseSpeed)
                    } else {
                        resolve();
                    }
                }, animationSpeed)
            })
        }

        this.setState({intro1Done: true});

        for (const char of txt2) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    intro2 += char;
                    this.setState({intro2});
                    if (char === '.' || char === '.' || char === '!' || char === '?') {
                        setTimeout(() => {
                            resolve();
                        }, pauseSpeed)
                    } else {
                        resolve();
                    }
                }, animationSpeed)
            })
        }
        this.setState({textAnimationDone: true});
    }
/**
 * Render View
 * 
 * @returns 
 * @memberof StartScreen
 */
render() {
        return this.state.loaded
            ? (
                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.narrationText}>
                            {this.state.intro1
}
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        {this.state.intro1Done && <Image
                            resizeMode="contain"
                            style={styles.chefGordon}
                            source={this.state.dish.prompts.intro[0] && this.state.dish.prompts.intro[0].image
                            ? {
                                uri: this.state.dish.prompts.intro[0].image
                            }
                            : require('../../assets/images/chef-gordon.png')}/>}
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.speakingText}>
                            {this.state.intro2
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
                        {this.state.textAnimationDone && <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ChoicesLevel', {dish: this.state.dish})}
                            style={styles.nextButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.nextButtonImage]}
                                source={require('../../assets/images/next-button.png')}/>
                        </TouchableOpacity>}
                    </View>
                </View>
            )
            : null;
    }
}
