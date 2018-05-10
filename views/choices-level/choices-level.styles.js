/**
 *This is the stylesheet for the 'choices-level' view
 **/
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const styles = StyleSheet.create({
    // //This view is divided into three boxes of two different sizes.
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F8C291'
    },
    ingredientsBox: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dishNameBox: {
        alignItems: 'center',
    },
    penaltyBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    penalty: {
        height: 75,
        width: 75
    },
    penaltyLoss: {
        opacity: .5
    },
    buttonsBox: {
        flex: .20
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
    //Styling for the ingredients
    ingredientsWrapper: {
        alignItems: 'center',
        marginBottom: 10,
    },
    ingredientsImage: {
        alignSelf: 'center',
        width: 90,
        height: 90
    },
    selected:{
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    cookTime: {
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
    //Quit button styling
    quitButton: {
        position: 'absolute',
        bottom: 30,
        left: 30
    },
    quitButtonImage: {
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
    title: {
        fontSize: 50
    }
});