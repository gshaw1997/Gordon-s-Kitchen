import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './choices-level.styles';

export default class ChoicesLevelScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dishNameBox} >
                    //INTRO TEXT
                    <Text style={[styles.narrationText, styles.title]}> GREEK PIZZA </Text>
                </View>
                <View style={styles.ingredientsBox}>
                    <Text style={styles.narrationText}>The next ingredient is:</Text>
                    //TODO: EDIT THE PATHS OF THE FOOD CHOICES ACCORDING TO THE INGREDIENTS NEEDED FOR THE DISH
                    //FOOD CHOICE #1
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Start')}
                        style={styles.ingredientsWrapper}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles.ingredientsImage}
                            source={require('../../assets/images/cheese.png')}
                        />
                    </TouchableOpacity>
                    //FOOD CHOICE #2
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Start')}
                        style={styles.ingredientsWrapper}

                    >
                        <Image
                            resizeMode="contain"
                            style={styles.ingredientsImage}
                            source={require('../../assets/images/broccoli.png')}
                        />
                    </TouchableOpacity>
                    //FOOD CHOICE #3
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Start')}
                        style={styles.ingredientsWrapper}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles.ingredientsImage}
                            source={require('../../assets/images/milk.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsBox}>
                    //QUIT BUTTON ON LOWER LEFT-HAND CORNER OF APP
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Start')}
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
                        onPress={() => this.props.navigation.navigate('Failure')}
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
