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
                            Many hours later, your dish is completed.
                        </Text>

                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.surprisedGordon}
                            source={require('../../assets/images/surprised-gordon.png')}/>
                        <Text style={styles.speakingText}>
                            "Delicious. FINALLY, some good food."
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
