/* eslint-disable prettier/prettier */
import { StyleSheet,Dimensions } from 'react-native';

const {height, width} = Dimensions.get('screen');
const Style = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    },
    display: {
        height: height * 0.3,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 25,
    },
    displayText: {
        fontSize: 37,
        color: 'white',
        alignSelf: 'flex-end',
        paddingBottom : 25,
    },
    bottom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: height * 0.9 
    },
    bodybox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 70,
        width: 70,
        margin: 16,
    },
    rightbox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        fontSize: 32,
        height: 107,
        width: 60,
        paddingHorizontal: 10,
        marginHorizontal: 16,
    },
    topBox: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        fontSize: 32,
        height: 107,
        width: 60,
        paddingHorizontal: 10,
        marginHorizontal: 16,
    },
    bottomBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        fontSize: 32,
        height: 107,
        width: 60,
        paddingHorizontal: 10,
        marginHorizontal: 16,
    },
    equal: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        height: 55,
        width: 55,
        backgroundColor: '#fff2b2',
    },
    equalText: {
        color: 'black',
        fontSize: 32,

    },
});

export default Style;
