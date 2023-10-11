import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [surname, setSurame] = useState()
  const [contact, setContact] = useState()
  const [address, setAddress] = useState()
  const [card, setCard] = useState()

  return (

    <View style={styles.container}>
      <View style={styles.TopContainer}>

        <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


          <Text style={styles.appName} >Profile</Text>
        </View>
      </View>

      {/* <ScrollView >  */}
      <View style={styles.BottomContainer}>

        <View style={styles.innerContainer} >

          <View >
            <TextInput style={styles.TextInput} placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.TextInput} value={password} placeholder="Surname" onChangeText={(value) => setPassword(value)} />
            <TextInput style={styles.TextInput} placeholder="Name" value={name} onChangeText={(value) => setName(value)} />
            <TextInput style={styles.TextInput} value={surname} placeholder="Surname" onChangeText={(value) => setSurame(value)} />
            <TextInput style={styles.TextInput} value={contact} placeholder="Contact Details" onChangeText={(value) => setContact(value)} />
            <TextInput style={styles.TextInput} value={address} placeholder="Address" onChangeText={(value) => setAddress(value)} />
            <TextInput style={styles.TextInput} value={card} placeholder="Card number" onChangeText={(value) => setCard(value)} />

            {/* <Button/> onPress={register}*/}
            <View style={styles.actionContainer} >
              <TouchableOpacity style={styles.actionButton} >

                <Text style={styles.signIn} >
                  Edit Profile</Text>

              </TouchableOpacity >
            </View>


            {/* <View style={styles.actionSignButton}>

                            <Text color style={styles.signUpAlready}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{ marginLeft: 0 }} >
                                <Text style={styles.signUp} > Login</Text>
                            </TouchableOpacity>

                        </View> */}

          </View>


        </View>

      </View>
      {/* </ScrollView>    */}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingvertical: 80,
    backgroundColor: '#F2F2F2F2',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  TopContainer: {
    // flex: 0.4,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  appName: {
    // fontFamily: ' berskshire',
    fontSize: 20,
    color: '#ACA567',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  BottomContainer: {
    flex: 2,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // height:200
    paddingBottom: 10,

  },

  innerContainer: {
    height: 350,
    width: 320,
    padding: 30,
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
    width: 300,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    borderColor: '#c4c4c4',


  },

  actionContainer: {
    height: 220,
    top: 10,
    // // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  actionButton: {
    // flex: 1,
    backgroundColor: '#ACA567',
    borderRadius: 5,
    height: 45,
    width: 300,
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
    width: 300,
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
