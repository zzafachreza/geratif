import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
    ImageBackground,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
export default function GetStarted({ navigation }) {


    const masuk = () => {

        getData('user').then(res => {
            if (!res) {
                navigation.replace('Login')
            } else {
                navigation.replace('Home')

            }
        })
    }





    return (
        <ImageBackground
            source={require('../../assets/akses.png')}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>


            <TouchableOpacity onPress={masuk}>
                <Image source={require('../../assets/menu1.png')} style={{
                    height: 140,
                    width: 310,
                    resizeMode: 'contain',
                    marginBottom: 10,
                }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://pojokinputhamil.blogspot.com/')}>
                <Image source={require('../../assets/menu2.png')} style={{
                    height: 140,
                    width: 310,
                    resizeMode: 'contain',
                    marginTop: 10,
                }} />
            </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({});
