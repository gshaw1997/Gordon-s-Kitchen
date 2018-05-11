import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from './splash.styles';

export default class SplahScreen extends React.Component {
    render() {
        return (
            <View
                resizeMode="cover"
                style={styles.container}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.text}> Gordon's </Text>
                </View>
                <Image
                    resizeMode="contain"
                    style={styles.madGordon}
                    source={require('../../assets/images/mad-gordon.png')}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.text}> Kitchen</Text>
                </View>
                <Text style={styles.company}>A+ Games</Text>

            </View>
        );
    }
}
