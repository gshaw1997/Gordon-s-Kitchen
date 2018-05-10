import {
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const PROGRESS_WIDTH = '100%';
export const PROGRESS_WRAPPER_MARGIN = 20;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileHeader: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    chefHat: {
        width: 125,
        height: 125,
        marginBottom: 15,
    },
    progressTxt: {
        fontSize: 40,
        fontFamily: 'gaegu',
    },
    progressWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: PROGRESS_WRAPPER_MARGIN,
    },
    progressMeta: {
        width: PROGRESS_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressMetaTxt: {
        fontFamily: 'gaegu',
        fontSize: 22,
        width: 100,
    },
    progressMetaTxtLarge: {
        fontSize: 30,
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
    progressBar:{
        backgroundColor: '#78E08F',
        height: 25,
        width: 50
    }
});