import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './success.styles';

export default class SuccessScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/pink-pixels.jpg')}
            >
                <View style={styles.container}>
                    <View style={[styles.box2]} >
                        //TODO: INSERT DISH NAME HERE AFTER THE DATABASE HAS BEEN COMPLETED.
                        <Text style={styles.narrationText}> Many hours later, your dish is completed. </Text>
                        
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.surprisedGordon}
                            source={require('../../assets/images/surprised-gordon.png')}
                        />
                         //TODO: INSERT COMPLIMENT HERE AFTER THE DATABASE HAS BEEN COMPLETED.
                        <Text style={styles.speakingText}> "Delicious. FINALLY, some good food." </Text>
                    </View>
                    <View style={styles.box2}>
                        //QUIT BUTTON ON LOWER LEFT-HAND CORNER OF APP
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Failure')}
                            style={styles.quitButton}
                        >
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.quitButtonImage]}
                                source={require('../../assets/images/quit-button.png')}
                            />
                        </TouchableOpacity>
                        //NEXT BUTTON ON LOWER RIGHT-HAND CORNER OF APP
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Start')}
                            style={styles.nextButton}
                        >
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.nextButtonImage]}
                                source={require('../../assets/images/next-button.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
