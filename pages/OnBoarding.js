import 'react-native-gesture-handler';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default function OnBoarding({ navigation }) {

    const login = () => {
        navigation.navigate('Login')
    }

    return (

        <View style={styles.container}>
            <Image source={require('../assets/rest/Sky_Cuisine-lo.jpeg')} style={styles.topContainer} >
                {/* <Text style={styles.appName} > SKY CUISINE </Text> */}
            </Image>



            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer} >

                    <View style={styles.actionContainer} >
                        <TouchableOpacity onPress={login} style={styles.actionButton} >

                            <Text style={styles.signIn} >
                                Login</Text>

                        </TouchableOpacity  >
                        <Text></Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.actionButton1} >

                            <Text style={styles.register} >
                                Register</Text>

                        </TouchableOpacity  >
                    </View>

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingvertical: 80,
        backgroundColor: '#F2F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    topContainer: {
        flex: 1,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: "90%",

    },

    appName: {
        // fontFamily: ' berskshire',
        fontSize: 40,
        color: '#ACA567',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    bottomContainer: {
        flex: 1,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height:200
    },

    innerContainer: {
        height: "100%",
        width: "100%",
        padding: 15,
        // flex: 1,
        borderRadius: 20,
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        // height:90,
        flex: 1,
        top: 20,
        // backgroundColor: "blue"
    },

    TextInput: {
        height: 45,
        width: 300,
        borderRadius: 20,
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        borderColor: '#e55d85',


    },

    actionContainer: {
        height: 220,
        top: 40,
        // borderWidth:1,
        width:"100%"
        // // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    actionButton: {
        // flex: 1,
        backgroundColor: '#ACA567',
        borderRadius: 10,
        height: 45,
        // width:'100%',
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'
    },
    actionButton1: {
        // flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        height: 45,
        width: "100%",
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        color: 'black',
        borderColor:' #ACA567',
        borderWidth:0.5
    },
    actionSignButton: {
        flexDirection: 'row',
        // backgroundColor: '#e55d85',
        marginVertical: 10,
        borderRadius: 20,
        height: 45,
        width: 300,
        // paddingvertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'

    },
    signUpAlready: {
        // flex: 1,
        // // backgroundColor: 'blue',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 19,
        color: 'black',
        fontSize: 15
    },
    signIn: {
        color: 'white',
        letterSpacing:2

    },
    register: {
        color: '#ACA567',
        fontWeight:"400",
        letterSpacing:2


    }
});