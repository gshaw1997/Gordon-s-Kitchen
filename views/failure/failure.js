import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './failure.styles';

export default class FailureScreen extends React.Component {
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
            failureTxt1: null,
            failureTxt2: null,
            failure1Done: false,
            textAnimationDone: false
        }
    }
/**
 * Before screen renders
 * 
 * @memberof FailureScreen
 */
componentDidMount() {
        this.startTextAnimation();
    }
/**
 * Start text animation
 * 
 * @memberof FailureScreen
 */
async startTextAnimation() {
        const animationSpeed = 75;
        const pauseSpeed = 200;
        const txt1 = (this.state.dish.prompts.failure[0]
            ? this.state.dish.prompts.failure[0].text
            : `Your dish is done. Gordon smiles.`).split('');
        let failureTxt1 = '';

        const txt2 = (this.state.dish.prompts.failure[1]
            ? this.state.dish.prompts.failure[1].text
            : `"You've got a great future in my industry . . . as my customer."`).split('');
        let failureTxt2 = '';

        for (const char of txt1) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    failureTxt1 += char;
                    this.setState({failureTxt1});
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

        this.setState({failure1Done: true});

        for (const char of txt2) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    failureTxt2 += char;
                    this.setState({failureTxt2});
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
 * Renders Screen
 * 
 * @returns 
 * @memberof FailureScreen
 */
render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/blue-pixels.png')}>
                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.narrationText}>
                            {this.state.failureTxt1
}
                        </Text>
                        <Text style={styles.speakingText}>
                            {this.state.failureTxt2
}
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        {this.state.failure1Done &&< Image
                        resizeMode = "contain"
                        style = {
                            styles.brokenHeart
                        }
                        source = {
                            this.state.dish.prompts.failure[0] && this.state.dish.prompts.failure[0].image
                                ? {
                                    uri: this.state.dish.prompts.failure[0].image
                                }
                                : require('../../assets/images/broken-heart.png')
                        } />}
                    </View>
                    <View style={styles.box2}>
                        {this.state.textAnimationDone && <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RewardSummary', {
                            dish: this.state.dish,
                            penalties: this.state.penalties
                        })}
                            style={styles.nextButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.nextButtonImage]}
                                source={require('../../assets/images/next-button.png')}/>
                        </TouchableOpacity>}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
