import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
// import { } from 'react-native-gesture-handler';
import { CartContext } from '../CartContext/cartContext';
import { Avatar, Button, Card } from 'react-native-paper';

import { usePaymentSheet } from "@stripe/stripe-react-native"

export default function Checkout({ navigation }) {

  const [address, setAddress] = useState()
  const [ready, setReady] = useState(false)
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);


  useEffect(()=>{
    initializePaymentIntent();
  },[])

  function addedCard() {

    return cartItems.map((item) => {

      return (

        <Card height={"30%"} contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 1, borderColor: 'black' }}>

          <View style={{ flex: 0.6 }}>
            <Avatar.Image size={90} source={{ uri: item.uri }} />
          </View>

          <View style={{ flex: 1, width: "50%" }} justifyContent='flex-start' padding={5} >

            <Text style={{ fontSize: 14, paddingBottom: 10 }} > {item.name}  </Text>
            {/* <Text style={{ fontSize: 12, paddingBottom: 10 }}>  Price: R {price} </Text> */}
            <Text style={{ fontSize: 12, paddingBottom: 10 }}>  Quantity: {item.quantity} </Text>

          </View>

          <View marginLeft={0} width={'0%'} style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 10 }} >

            <TouchableOpacity marginLeft={20} onPress={() => removeFromCart(item.id)}>

              {/* <MaterialCommunityIcons name="delete-empty" size={24} color="black" /> */}

            </TouchableOpacity>

          </View>

        </Card>
      )

    })
  }


  // returns payment that user made
  async function getpaymentIntent() {

    url = 'https://restaurant-app-server-z6pm.onrender.com/payments/intents'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        amount: 50000
      }),

    })

    const { paymentIntent } = await response.json()
    console.log(paymentIntent);
    return {paymentIntent}


  }

  //
  const initializePaymentIntent = async () => {

    const { paymentIntent } = await getpaymentIntent()

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: "Sky Cuisine",
      allowsDelayedPaymentMethods: true
    })

    if (error){
      Alert.alert('Error')
    } else{
      setReady(true)
    }

  }


  //buy function

  const buy = async () =>{
    const {error} = await presentPaymentSheet()
    // console.log( "line 207 buy fuction",error);
    if (error){
      Alert.alert('Error')
    } else{
      Alert.alert('Great',"Your payment has been verified your food is coming your way")
      navigation.navigate('main')
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.TopContainer}>

        <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


          <Text style={styles.appName} >Review Order</Text>
        </View>
      </View>


      <ScrollView style={styles.BottomContainer}>

        <View style={styles.innerContainer} >

          {/* <View style={styles.animationContainer}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#eee',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../assets/EmptyCart.json')}
                />
            </View> onPress={logout}*/}

          <View style={{ height: 900 }}>

            <Card contentStyle={{ backgroundColor: "white" }}>
              <Card.Content>


                <Text variant="titleLarge">Name</Text>
                <TextInput style={styles.TextInput} placeholder="Name" value={address} onChangeText={(value) => setName(value)} />

                <Text variant="titleLarge">Surname</Text>
                <TextInput style={styles.TextInput} placeholder="Surname" value={address} onChangeText={(value) => setName(value)} />

                <Text variant="titleLarge">Address</Text>
                <TextInput style={styles.TextInput} placeholder="address" value={address} onChangeText={(value) => setName(value)} />

                <Text variant="titleLarge">Contact</Text>
                <TextInput style={styles.TextInput} placeholder="Contact" value={address} onChangeText={(value) => setName(value)} />



              </Card.Content>


            </Card>

            <View>
              <Text style={{ fontSize: 20 }} marginVertical={30}> Items</Text>

              <View style={{ height: 'auto', borderWidth: 1, borderColor: 'transparent' }} >
                {addedCard()}
                <View style={styles.actionContainer} >

                  <TouchableOpacity onPress={buy} style={styles.actionButton} >

                    <Text style={styles.signIn} >
                      Proceed</Text>

                  </TouchableOpacity >
                </View>
              </View>

            </View>
          </View>




        </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: 250,
    paddingvertical: 80,
    backgroundColor: '#F2F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
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
    // fontFamily: ' berskshire',
    fontSize: 28,
    color: '#ACA567',
    //  fontWeight:"bold",
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  BottomContainer: {
    flex: 0,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: "100%",
    paddingBottom: 0,


  },

  innerContainer: {
    // height: 550,
    width: "100%",
    // padding: 10,
    // // flex: 1,
    // borderRadius: 20,
    // marginBottom: 5,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',

    height: '100%',
    width: "100%",
    padding: 0,
    // flex: 1,
    // borderRadius: 20,
    marginBottom: 5,
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
    // height: 220,
    top: 50,
    // backgroundColor: 'blue',
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


  },
  TotalContainer: {
    // fontFamily: ' berskshire',
    // fontSize: 18,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
    borderTopWidth: 0.5,
    borderBlockColor: "#c4c4c4"
  },


});
