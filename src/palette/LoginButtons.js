import React from 'react';
import {TouchableOpacity, View, StyleSheet, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Label from './Label';

const LoginButtons = (props) => {

    const {text, icon, onPress, loading} = props;

    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#079CD7', '#19B7E9', '#36CFFB']} style={styles.linearGradient}>
                {loading ? <ActivityIndicator size="small" color={'white'}/> :
                <Icon name={icon} color={'#FFF'} size={30}/>}
            </LinearGradient>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPress} disabled={loading}>
                <Label color={'#FFF'} size={14} weight={'700'} text={text} left={30}/>
            </TouchableOpacity>
        </View>
    );
};

export default LoginButtons;

const styles = StyleSheet.create({

    viewContainer: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    linearGradient: {
        width: 54,
        height: 54,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        zIndex: 1000,
    },

    buttonStyle: {
        height: 45,
        borderRadius: 15,
        width: 230,
        backgroundColor: '#5EC4E8',
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
        zIndex: 999,
        marginLeft: 10,
    },
});
