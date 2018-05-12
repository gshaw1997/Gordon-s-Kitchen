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
                .getParam('penalties', null)
        }
    }
    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/pink-pixels.png')}>
                <View style={styles.container}>
                    <View style={[styles.box2]}>
                        <Text style={styles.narrationText}>
                            {this.state.dish.prompts.success[0]
                                ? this.state.dish.prompts.success[0].text
                                : `Many hours later, your dish is completed.`
}
                        </Text>

                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.surprisedGordon}
                            source={this.state.dish.prompts.success[0] && this.state.dish.prompts.success[0].image
                            ? {
                                uri: this.state.dish.prompts.success[0].image
                            }
                            : require('../../assets/images/surprised-gordon.png')}/>
                        <Text style={styles.speakingText}>
                            {this.state.dish.prompts.success[1]
                                ? this.state.dish.prompts.success[1].text
                                : `"Delicious. FINALLY, some good food."`
}
                        </Text>
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity
                            onPress=
                            { () => this.props.navigation.navigate('RewardSummary', {dish: this.state.dish, penalties: this.state.penalties}) }
                            style={styles.nextButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.nextButtonImage]}
                                source={require('../../assets/images/next-button.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
