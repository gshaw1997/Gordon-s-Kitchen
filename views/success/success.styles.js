/**
*This is the stylesheet for the 'success' view
**/
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    //This view is divided into three boxes of two different sizes (box 1 and box 2).
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box1: {
        flex: .5,
        alignItems :'center',
        flexWrap: 'wrap'
    },
    box2: {
        flex: .25,
        alignItems:'center',
        flexWrap: 'wrap'
    },
    //Styling for surprised Gordon image
    surprisedGordon: {
        height: 250,
        width: 250,
        marginLeft:30,
        marginTop: 20
    },
    //Basic button styling
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: '60%',
        borderRadius: 5,
        marginBottom: 15
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
    //Quit button styling
    quitButton: {
        position: 'absolute',
        bottom: 30,
        left: 30
    },
    quitButtonImage:{
        height: 90,
        width: 90
    },
    //Text styling
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
