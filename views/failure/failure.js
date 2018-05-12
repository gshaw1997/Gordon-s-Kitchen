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
                            {this.state.dish.prompts.failure[0]
                                ? this.state.dish.prompts.failure[0].text
                                : `Your dish is done. Gordon smiles.`
}
                        </Text>
                        <Text style={styles.speakingText}>
                            {this.state.dish.prompts.failure[1]
                                ? this.state.dish.prompts.failure[1].text
                                : `"You've got a great future in my industry . . . as my customer."`
}
                        </Text>
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.brokenHeart}
                            source={this.state.dish.prompts.failure[0] && this.state.dish.prompts.failure[0].image
                            ? {
                                uri: this.state.dish.prompts.failure[0].image
                            }
                            : require('../../assets/images/broken-heart.png')}/>
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RewardSummary', {
                            dish: this.state.dish,
                            penalties: this.state.penalties
                        })}
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
