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
            <ImageBackground
                resizeMode="cover"
                style={styles.container}
            >
          
            </ImageBackground>
        );
    }
}
