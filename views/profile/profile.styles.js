import {
    Platform,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ?
    20 :
    StatusBar.currentHeight;

export const PROGRESS_WIDTH = '100%';
export const PROGRESS_WRAPPER_MARGIN = 20;

const {
    height,
    width
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    defaultTxt: {
        fontFamily: 'gaegu',
        color: '#333',
        fontSize: 25
    },
    centerTxt: {
        textAlign: 'center'
    },
    flexColumn: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    profileHeader: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    chefHat: {
        width: height > 700 ? 100 : 75,
        height: height > 700 ? 100 : 75,
        marginBottom: 15
    },
    progressTxt: {
        fontSize: height > 700 ? 40 : 30,
        fontFamily: 'gaegu'
    },
    usernameTxt: {
        marginVertical: 15,
        fontSize: 45
    },
    progressWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: PROGRESS_WRAPPER_MARGIN
    },
    progressMeta: {
        width: PROGRESS_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressMetaTxt: {
        fontFamily: 'gaegu',
        fontSize: 22,
        width: 100
    },
    progressMetaTxtLarge: {
        fontSize: 28,
        textAlign: 'center'
    },
    progressMetaTxtSmall: {
        fontSize: 16,
        textAlign: 'right'
    },
    progressBarWrapper: {
        width: PROGRESS_WIDTH,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        height: 25,
        borderRadius: 2,
        overflow: 'hidden'
    },
    progressBar: {
        backgroundColor: '#78E08F',
        height: 25,
        width: 50
    },
    levelName: {
        fontSize: height > 700 ? 35 : 30
    },
    history: {
        marginVertical: 15
    },
    statWrapper: {
        marginTop: height > 700 ? 20 : 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    statBox: {
        position: 'relative',
        borderColor: '#333',
        borderWidth: 4,
        borderRadius: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        height:  height > 700 ? 125: 115,
        width:  height > 700 ? 125: 115
    },
    playStatNum: {
        fontSize: 50
    },
    playStatTxt: {
        fontSize: height > 700 ? 20 : 18
    },
    bottomWrapper: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10
    },
    button: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 2
    },
    logoutButton: {
        backgroundColor: '#EB2F06'
    },
    backButton: {
        backgroundColor: '#079992'
    },
    buttonTxt: {
        fontSize: 30,
        color: '#FFF'
    }
});