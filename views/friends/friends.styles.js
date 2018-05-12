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
    defaultTxt: {
        fontSize: 15,
    },
    headerTxt:{
        textAlign: 'center',
        fontFamily: 'gaegu',
        fontSize: 45,
    },
    searchBarWrapper: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    searchBar: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 100,
        paddingLeft: 15,
        paddingVertical: 10,
    },
    userCard: {
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
    userCardEven: {
        backgroundColor: '#FFF',
    },
    userCardOdd: {
        backgroundColor: '#f7f7f7',
    },
    usernameTxt: {
        fontSize: 33,
        fontFamily: 'gaegu',
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusButton: {
        backgroundColor: '#f78172',
    },
    minusButton: {
        backgroundColor: '#cec9c3',
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
        fontSize: 40,
        fontFamily: 'gaegu',
    },
    userList:{
       flex: 1,
    },
    noUsersWrapper:{
        marginTop: 30,
    },
    noUsersTxt:{
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'gaegu',
    },
    txtStack:{
        flexDirection: 'column',
    }
});