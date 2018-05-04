import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box1: {
        flex: .5,
        alignItems :'center',
        justifyContent: 'space-around'
    },
    box2: {
        flex: .25,
    },
    brokenHeart: {
        height: '70%',
        width: '70%',
        marginTop: 60
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: '60%',
        borderRadius: 5,
        marginBottom: 15
    },
    nextButton: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    nextButtonImage: {
        height: 75,
        width: 75
    },
    quitButton: {
        position: 'absolute',
        bottom: 30,
        left: 30
    },
    quitButtonImage:{
        height: 90,
        width: 90
    },
    narrationText: {
        fontFamily: 'gaegu',
        fontSize: 30,
        textAlign: 'center',
        padding: 40
    },
    speakingText: {
        fontFamily: 'kirang-haerang',
        fontSize: 30,
        textAlign: 'center',
        padding: 10
    }
});
