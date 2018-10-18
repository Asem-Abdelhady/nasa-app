import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    flex1: {
        flex: 1
    },
    topView: {
        paddingTop: 250
    },
    img: {
        height: 100,
        width: 100,
        shadowOffset: {  height: 10, width: 10},
        shadowColor: 'black',
        shadowOpacity: 0.9
    },
    startText: {
        fontSize: 30,
        color: 'orange',
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { height: 2, width: 2 },
        textShadowRadius: 10
    },
    button: {
        padding: 20,
        borderRadius: 10
    }
});

export default styles;