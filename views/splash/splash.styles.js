/**
*This is the stylesheet for the 'splash' view
**/
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    //This view is divided into three boxes of two different sizes (box 1 and box 2).
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e84118'
    },
    box1: {
        flex: .35,
        flexWrap: 'wrap'
    },
    box2: {
        flex: .325,
        flexWrap: 'wrap'
    },
});
