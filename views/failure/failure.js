import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './failure.styles';

export default class FailureScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
                source={require('../../assets/images/blue-pixels.jpg')}
            >
                <View style={styles.container}>
                    <View style={styles.box2} >
                        //TODO: INSERT INSULT HERE AFTER THE DATABASE HAS BEEN COMPLETED
                        <Text style={styles.narrationText}> Your pizza is done. Gordon smiles. </Text>
                        <Text style={styles.speakingText}> "You've got a great future in my industry . . . as my customer." </Text>
                    </View>
                    <View style={styles.box1}>
                        <Image
                            resizeMode="contain"
                            style={styles.brokenHeart}
                            source={require('../../assets/images/broken-heart.png')}
                        />
                    </View>
                    <View style={styles.box2}>
                        //QUIT BUTTON ON LOWER LEFT-HAND CORNER OF APP
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ChoicesLevel')}
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
                            onPress={() => this.props.navigation.navigate('Success')}
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
