/**
 *This is the stylesheet for the 'success' view
 **/
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    centerText: {
        alignItems: 'center'
    },
    penaltyBox: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    penalty: {
        height: 75,
        width: 75,
        marginBottom: 15,
    },
    message: {
        fontSize: 22,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 15,
    },
    reward: {
        fontSize: 25
    },
    progress: {
        fontSize: 20,
    },
    //Next button styling
    nextButton: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    nextButtonImage: {
        height: 75,
        width: 75
    },
});