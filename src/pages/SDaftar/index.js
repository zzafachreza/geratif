import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import { Linking } from 'react-native';

export default function SDaftar({ navigation, route }) {


    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const isFocused = useIsFocused();
    useEffect(() => {


        if (isFocused) {
            __getTransaction();
        }

    }, [isFocused]);

    const __getTransaction = () => {
        getData('user').then(res => {
            setUser(res);
        });




    }

    return (



        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F4F6FF',
            position: 'relative'
        }}>
            <View style={{
                padding: 20,
            }}>
                <MyHeader />
                <Image style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    width: 25,
                    height: 25,
                }} source={require('../../assets/bintang_putih.png')} />
                <Image style={{
                    position: 'absolute',
                    top: 70,
                    right: 40,
                    width: 25,
                    height: 25,
                }} source={require('../../assets/bintang_putih.png')} />
                <Image style={{
                    position: 'absolute',
                    top: 90,
                    right: 20,
                    width: 25,
                    height: 25,
                }} source={require('../../assets/bintang_putih.png')} />


                <Text style={{
                    fontFamily: fonts.primary[800],
                    color: colors.black,
                    fontSize: windowWidth / 12
                }}>Kesehatan Mental</Text>
                <Text style={{
                    fontFamily: fonts.primary[400],
                    color: colors.black,
                    fontSize: windowWidth / 22
                }}>Cek kesehatan mental kamu dengan klik link dibawah ini ya!</Text>

            </View>


            <TouchableOpacity onPress={() => navigation.navigate('AANilai')} style={{
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.primary[400],
                    color: colors.black,
                    fontSize: windowWidth / 28
                }}>https://bit.ly/SRQ-COLOMADU1</Text>
            </TouchableOpacity>

            <Image source={require('../../assets/back_mental.png')} style={{
                width: windowWidth / 1.2,
                height: windowWidth / 1.2,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 10,
            }} />

        </SafeAreaView>











    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: windowHeight,
        height: windowWidth / 2,
    },
    imageContainer: {
        flex: 1,
        marginBottom: 1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});