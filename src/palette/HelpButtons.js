import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Label from './Label';

const HelpButtons = (props) => {

    const {text, icon, onPress, width, size, top} = props;

    return (
        <View style={[styles.viewContainer, {width: width, marginTop: top}]}>
            <LinearGradient colors={['#079CD7', '#19B7E9', '#36CFFB']} style={styles.linearGradient}>
                {icon}
            </LinearGradient>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                <Label color={'#FFF'} size={size ? size : 8} weight={'700'} text={text} left={30}/>
            </TouchableOpacity>
        </View>
    );
};

export default HelpButtons;

const styles = StyleSheet.create({

    viewContainer: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    linearGradient: {
        width: 46,
        height: 46,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        zIndex: 1000,
    },

    buttonStyle: {
        height: 35,
        borderRadius: 15,
        width: '100%',
        backgroundColor: '#5EC4E8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        zIndex: 999,
        marginLeft: 10,
    },
});
