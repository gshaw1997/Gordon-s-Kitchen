import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e58e26'
    },
    ingredientsBox: {
        flex: .60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dishNameBox: {
        flex: .20
    },
    buttonsBox: {
        flex: .20
    },
    gordon: {
        height: '80%',
        width: '80%',
        marginLeft: 40,
        marginTop: 20
    },
    title: {
        fontSize: 50
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: '60%',
        borderRadius: 5,
        marginBottom: 15
    },
    ingredientsWrapper: {
        alignItems: 'center',
        height: 75,
        width: 75
    },
    ingredientsImage:{
        width: 90,
        height: 90
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
    quitButtonImage: {
        height: 90,
        width: 90
    },
    narrationText: {
        fontFamily: 'gaegu',
        fontSize: 30,
        textAlign: 'center',
        padding: 40
    }
});
