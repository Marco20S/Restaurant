import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { auth, database } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

export default function Signup({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [contact, setContact] = useState()
    const [address, setAddress] = useState()
    const [card, setCard] = useState()
    const [userInfo, setUserInfo] = useState()


    const register = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                newUser()
                newUsers()

                showMessage({
                    message: "Great, You Have Registered successfully",
                    // description: "This is our second message",
                    type: "success",
                });

                // Alert.alert('Great', 'You Have Registered successfully')

                navigation.navigate('Login')

            }).catch((error) => {

                console.log(error.message)

                showMessage({
                    message: "Warning, An Error occured When Add New User ",
                    // description: "This is our second message",
                    type: "danger",
                });
                // Alert.alert("Warning", "An Error occured when trying to add new user ")

            })
        // navigation.navigate('login')
    }

    const newUsers = async () => {

        // const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        // const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/users`;


        // const documentData = {
        //     field: {

        //         email: { stringValue: email },
        //         password: { stringValue: password },
        //         name: { stringValue: name },
        //         surname: { stringValue: surname },
        //         contact: { stringValue: contact },
        //         address: { stringValue: address },


        //     }
        // }

        // try {
        //     const response = await fetch(url, {

        //         headers: {
        //             'Content-Type': "application"
        //         },

        //         method: "POST",
        //         body: JSON.stringify(documentData),
        //     });

        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log('data ', data);
        //     } else {
        //         console.log('Error,,,', response.statusText);
        //     }

        // } catch (error) {
        //     console.error('Error:', error);
        // }



        const newUser = { email, name, surname, contact, address }

        try {
            // collection in firebase where user will be added
            const userRef = await setDoc(doc(database, 'Users', newUser.email), newUser)


            console.log('user reference id', userRef.id);

            //adding user data to firebase/firestore
            // setEmail(email);
            // setName('');
            // setSurname('');
            // setContact('');
            // setAddress('');
            // setPassword('')

            const user = {

                fields: {

                    email: { stringValue: email },
                    name: { stringValue: name },
                    surname: { stringValue: surname },
                    contact: { stringValue: contact },
                    address: { stringValue: address },
                }
            }

        } catch (error) {

            console.log(error);

        }

    }

    const newUser = async () => {

        const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;


        const documentData = {
            field: {

                email: { stringValue: email },
                password: { stringValue: password },
                // name: { stringValue: name },
                // surname: { stringValue: surname },
                // contact: { stringValue: contact },
                // address: { stringValue: address },


            }
        }

        try {
            const response = await fetch(url, {

                headers: {
                    'Content-Type': "application"
                },

                method: "POST",
                body: JSON.stringify(documentData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('data ', data);
            } else {
                console.log('Error,,,', response.statusText);
            }

        } catch (error) {
            console.error('Error:', error);
        }


    }

    //register users to app



    return (

        <View style={styles.container}>
            {/* <View style={styles.TopContainer} >
                <Text style={styles.appName} >Sign Up Page</Text>
            </View> */}

            <View style={styles.BottomContainer} >

                <View style={styles.innerContainer} >
                    {/* <ScrollView > */}
                    <View style={styles.inputContainer} >


                        <Text style={{ paddingBottom: 3, fontSize: 14 }}> Name</Text>
                        <TextInput style={styles.TextInput} placeholder="Joe" value={name} onChangeText={(value) => setName(value)} />

                        <Text style={{ paddingBottom: 3, fontSize: 14 }}> Surname</Text>
                        <TextInput style={styles.TextInput} value={surname} placeholder="Zulu" onChangeText={(value) => setSurname(value)} />
                        
                        <Text style={{ paddingBottom: 3, fontSize: 14 }}> Email</Text>
                        <TextInput style={styles.TextInput} placeholder="Joezulu@gmail.com" value={email} onChangeText={(text) => setEmail(text)} />

                        <Text style={{ paddingBottom: 3, fontSize: 14 }}> Contact Details</Text>
                        <TextInput style={styles.TextInput} value={contact} placeholder="0987654321" onChangeText={(value) => setContact(value)} />

                        <Text style={{ paddingBottom: 3, fontSize: 14 }}> Password</Text>
                        <TextInput style={styles.TextInput} value={password} placeholder="******" onChangeText={(value) => setPassword(value)} />
                        {/* <Text style={{ paddingBottom:3, fontSize:14}}> Email</Text>
                        <TextInput style={styles.TextInput} value={address} placeholder="Address" onChangeText={(value) => setAddress(value)} /> */}
                        {/* <TextInput style={styles.TextInput} value={card} placeholder="Card number" onChangeText={(value) => setCard(value)} /> */}

                        {/* <Button/> onPress={register}*/}
                        <View style={styles.actionContainer} >
                            <TouchableOpacity onPress={register} style={styles.actionButton} >

                                <Text style={styles.signIn} >
                                    Sign Up</Text>

                            </TouchableOpacity >
                        </View>


                        {/* <View style={styles.actionSignButton}>

                            <Text color style={styles.signUpAlready}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{ marginLeft: 0 }} >
                                <Text style={styles.signUp} > Login</Text>
                            </TouchableOpacity>

                        </View> */}

                    </View>

                    {/* </ScrollView> */}
                </View>

            </View>
            <FlashMessage position={"top"} />
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

    TopContainer: {
        flex: 1,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    appName: {
        // fontFamily: ' berskshire',
        fontSize: 40,
        color: '#e55d85',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    BottomContainer: {
        flex: 1,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        // height:200
    },

    innerContainer: {
        height: 350,
        width: '100%',
        padding: 20,
        // flex: 1,
        borderRadius: 20,
        // backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    inputContainer: {
        // height:90,
        flex: 1,
        top: 20,
        // backgroundColor: "blue"
    },

    TextInput: {
        height: 45,
        width: '100%',
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        borderColor: '#c4c4c4',


    },

    actionContainer: {
        height: 220,
        top: 25,
        paddingTop:20
        // // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    actionButton: {
        // flex: 1,
        backgroundColor: '#ACA567',
        borderRadius: 5,
        height: 45,
        width: '100%',
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'
    },
    actionSignButton: {
        flexDirection: 'row',
        // backgroundColor: '#e55d85',
        marginVertical: 10,
        borderRadius: 20,
        height: 45,
        width: "100%",
        // paddingvertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'

    },

    signUp: {
        // flex: 1,
        // // backgroundColor: 'blue',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 19,
        color: '#e55d85',
        fontSize: 15,
        textDecorationLine: 'underline'
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


    }

});
