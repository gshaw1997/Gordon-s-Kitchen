import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './end.styles';


export default class EndScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.text}> Thanks for playing! </Text>
                </View>
                <Image
                    resizeMode="contain"
                    style={styles.smirkingGordon}
                    source={require('../../assets/images/smirking-gordon.png')}
                />
                 <View style={styles.textWrapper}>
                    <Text style={styles.creditsText}> This game was created by Gustavus Shaw II, Alex Goldberg, and Golda Meir Chiong </Text>
                </View>
                <Text style={styles.company}>A+ Games</Text>
            </ImageBackground>
        );
    }
}
