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
                .getParam('penalties', null)
        }
    }
    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/blue-pixels.png')}>
                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.narrationText}>
                            Your dish is done. Gordon smiles.
                        </Text>
                        <Text style={styles.speakingText}>
                            "You've got a great future in my industry . . . as my customer."
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.brokenHeart}
                            source={require('../../assets/images/broken-heart.png')}/>
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RewardSummary', {dish: this.state.dish, penalties: this.state.penalties})}
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
