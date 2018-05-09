/**
*This is the stylesheet for the 'end' view
**/
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
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
        fontFamily: 'gaegu',
        fontSize: 40
    },
    creditsText: {
        fontFamily: 'gaegu',
        fontSize: 25,
        padding: 20
    },

    smirkingGordon: {
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