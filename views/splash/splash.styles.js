/**
*This is the stylesheet for the 'splash' view
**/
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    //This view is divided into three boxes of two different sizes (box 1 and box 2).
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c23616'
    },
    textWrapper: {
        flex: 0.25,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    text: {
        fontFamily: 'caesar-dressing',
        fontSize: 70,
        color: 'white'
    },
    madGordon: {
        height: 200,
        width: 200
    },
    company: {
        position: 'absolute',
        bottom: 10,
        fontFamily: 'gloria-hallelujah',
        color: 'white'
    }
});
