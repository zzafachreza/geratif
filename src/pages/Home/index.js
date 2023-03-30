import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';



export default function Home({ navigation }) {


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
      backgroundColor: colors.myback,
      padding: 20,
    }}>
      <MyHeader menu="Beranda" />
      {/* info user */}
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontFamily: fonts.primary[600],
          fontSize: windowWidth / 19
        }}>Halo, {user.nama_lengkap} !</Text>
        <Text style={{
          fontFamily: fonts.secondary[200],
          fontSize: windowWidth / 25
        }}>Senang bertemu dengan kamu</Text>
      </View>
      {/* menu utama */}
      <View style={{
        marginTop: 5,
        flex: 1,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('SAdd', user)} style={{
          flexDirection: 'row',
          padding: 10,
          elevation: 1,
          borderRadius: 10,
          marginVertical: 5,
          backgroundColor: '#3F60A0'
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 24,
              color: colors.white
            }}>Input Kesehatanmu</Text>
            <Text style={{
              fontFamily: fonts.primary[300],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>catat kesehatanmu dulu yuk!</Text>

            <View style={{
              marginTop: 10,
            }}>
              <Text style={{
                fontFamily: fonts.primary[300],
                fontSize: windowWidth / 24,
                color: colors.white
              }}>See More</Text>
            </View>
          </View>
          <Image source={require('../../assets/A1.png')} style={{
            height: 90,
            width: 80,
            resizeMode: 'contain'
          }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AAKategori', user)} style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          elevation: 1,
          marginVertical: 5,
          backgroundColor: '#FFF'
        }}>

          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 24,
              color: colors.black
            }}>Seputar Remaja</Text>
            <View style={{
              borderBottomWidth: 2,
              borderColor: colors.foourty,
              width: 30,
              marginVertical: 5,
              alignSelf: 'center'
            }} />
            <Text style={{
              fontFamily: fonts.primary[300],
              fontSize: windowWidth / 30,
              color: colors.border
            }}>cari tahu seputar permasalahan remaja disini</Text>

            <View style={{
              marginTop: 10,
              flexDirection: 'row'
            }}>
              <Text style={{
                flex: 1,
                fontFamily: fonts.primary[300],
                fontSize: windowWidth / 24,
                color: colors.foourty
              }}>See Details  </Text>

              <Icon type='ionicon' name='arrow-forward-outline' color={colors.foourty} size={windowWidth / 24} />
            </View>
          </View>
          <Image source={require('../../assets/A2.png')} style={{
            height: 90,
            flex: 1,
            width: 80,
            resizeMode: 'contain'
          }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AABidan', user)} style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          elevation: 1,
          marginVertical: 5,
          backgroundColor: '#E6F0F3'
        }}>

          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 24,
              color: colors.black
            }}>Tanya Nakes</Text>
            <View style={{
              borderBottomWidth: 2,
              borderColor: colors.foourty,
              width: 30,
              marginVertical: 5,
              alignSelf: 'center'
            }} />
            <Text style={{
              fontFamily: fonts.primary[300],
              fontSize: windowWidth / 30,
              color: colors.border
            }}>tenang, tenaga kesehatan akan membantu menyelesaikan permasalahan remaja mu</Text>

            <View style={{
              marginTop: 10,
              flexDirection: 'row'
            }}>
              <Text style={{
                flex: 1,
                fontFamily: fonts.primary[300],
                fontSize: windowWidth / 24,
                color: colors.foourty
              }}>See Details  </Text>

              <Icon type='ionicon' name='arrow-forward-outline' color={colors.foourty} size={windowWidth / 24} />
            </View>
          </View>
          <Image source={require('../../assets/A3.png')} style={{
            height: 100,
            flex: 1,
            width: 80,
            resizeMode: 'contain'
          }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('STentang', user)} style={{
          flexDirection: 'row',
          padding: 10,
          elevation: 1,
          borderRadius: 10,
          marginVertical: 5,
          backgroundColor: '#B1D4E0'
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 24,
              color: colors.black
            }}>Tentang Kami</Text>
            <Text style={{
              fontFamily: fonts.primary[300],
              fontSize: windowWidth / 28,
              color: colors.foourty
            }}>cari tahu panduan aplikasi dan informasi tentang Geratif disini</Text>

            <View style={{
              marginTop: 10,
            }}>
              <Text style={{
                fontFamily: fonts.primary[300],
                fontSize: windowWidth / 24,
                color: colors.foourty
              }}>See More</Text>
            </View>
          </View>
          <Image source={require('../../assets/A4.png')} style={{
            height: 90,
            width: 80,
            resizeMode: 'contain'
          }} />
        </TouchableOpacity>

      </View>
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