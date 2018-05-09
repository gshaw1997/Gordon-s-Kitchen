import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './start.styles';

export default class StartScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dishID: this.props.navigation.getParam('dishID', null)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box2}>
                    <Text style={styles.narrationText}>
                        A muscular man in a white apron approaches you, staring. You stand awkwardly. He
                        speaks.
                    </Text>
                </View>
                <View style={styles.box1}>
                    <Image
                        resizeMode="contain"
                        style={styles.chefGordon}
                        source={require('../../assets/images/chef-gordon.png')}/>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.speakingText}>
                        "So you think you can cook? We'll see about that."
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={styles.quitButton}>
                        <Image
                            resizeMode="contain"
                            style={[styles.button, styles.quitButtonImage]}
                            source={require('../../assets/images/quit-button.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ChoicesLevel', {dishID: this.state.dishID})}
                        style={styles.nextButton}>
                        <Image
                            resizeMode="contain"
                            style={[styles.button, styles.nextButtonImage]}
                            source={require('../../assets/images/next-button.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
