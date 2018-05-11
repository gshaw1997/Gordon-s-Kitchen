/**
 *This is the stylesheet for the 'splash' view
 **/
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    header: {
        marginVertical: 25,
    },
    headerTxt: {
        textAlign: 'center',
        fontFamily: 'gaegu',
        fontSize: 50,
    },
    defaultTxt: {
        fontSize: 30,
        fontFamily: 'gaegu',
    },
    completedCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 75,
        width: '100%',
        borderTopWidth: .25,
        borderBottomWidth: .25,
        borderColor: '#E0E0E0',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    completedCardEven: {
        backgroundColor: '#FFF',
    },
    completedCardOdd: {
        backgroundColor: '#f7f7f7',
    },
    usernameTxt: {
        fontSize: 33,
        fontFamily: 'gaegu',
    },
    button: {
        height: 50,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#f78172',
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10
    },
    buttonTxt: {
        color: '#FFF',
        fontSize: 35,
        fontFamily: 'gaegu',
    },
    completedList: {
        flex: 1,
    },
    noCompletedWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noCompletedTxt: {
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'gaegu',
    }
});