import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './start.styles';

export default class StartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box2} >
                    //INTRO TEXT
                    <Text style={styles.narrationText}> A muscular man in a white apron approaches you, staring. You stand awkwardly. He speaks. </Text>
                </View>
                <View style={styles.box1}>
                    //Image of Gordon's face
                    <Image
                        resizeMode="contain"
                        style={styles.gordon}
                        source={require('../../assets/images/chef-gordon.png')}
                    />
                </View>
                <View style={styles.box2}>
                    //INTRO TEXT
                    <Text style={styles.speakingText}> "So you think you can cook? We'll see about that." </Text>
                    //QUIT BUTTON ON LOWER LEFT-HAND CORNER OF APP
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
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
                        onPress={() => this.props.navigation.navigate('ChoicesLevel')}
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
        );
    }
}
