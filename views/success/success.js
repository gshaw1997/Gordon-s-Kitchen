import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './success.styles';

export default class SuccessScreen extends React.Component {
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
            successTxt1: null,
            successTxt2: null,
            success1Done: false,
            textAnimationDone: false
        }
    }
/**
 * Before screen renders
 * 
 * @memberof SuccessScreen
 */
componentDidMount() {
        this.startTextAnimation();
    }
/**
 * Start animation of text
 * 
 * @memberof SuccessScreen
 */
async startTextAnimation() {
        const animationSpeed = 75;
        const pauseSpeed = 200;
        const txt1 = (this.state.dish.prompts.success[0]
            ? this.state.dish.prompts.success[0].text
            : `Many hours later, your dish is completed.`).split('');
        let successTxt1 = '';

        const txt2 = (this.state.dish.prompts.success[1]
            ? this.state.dish.prompts.success[1].text
            : `"Delicious. FINALLY, some good food."`).split('');
        let successTxt2 = '';

        for (const char of txt1) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    successTxt1 += char;
                    this.setState({successTxt1});
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

        this.setState({success1Done: true});

        for (const char of txt2) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    successTxt2 += char;
                    this.setState({successTxt2});
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
 * @memberof SuccessScreen
 */
render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/pink-pixels.png')}>
                <View style={styles.container}>
                    <View style={[styles.box2]}>
                        <Text style={styles.narrationText}>
                            {this.state.successTxt1
}
                        </Text>

                    </View>
                    <View style={styles.box1}>
                        {this.state.success1Done && <Image
                            resizeMode="contain"
                            style={styles.surprisedGordon}
                            source={this.state.dish.prompts.success[0] && this.state.dish.prompts.success[0].image
                            ? {
                                uri: this.state.dish.prompts.success[0].image
                            }
                            : require('../../assets/images/surprised-gordon.png')}/>}
                        <Text style={styles.speakingText}>
                            {this.state.successTxt2
}
                        </Text>
                    </View>
                    <View style={styles.box2}>
                        {this.state.textAnimationDone && <TouchableOpacity
                            onPress=
                            { () => this.props.navigation.navigate('RewardSummary', {dish: this.state.dish, penalties: this.state.penalties}) }
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
