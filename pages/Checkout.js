import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
// import { } from 'react-native-gesture-handler';
import { CartContext } from '../CartContext/cartContext';
import { Avatar, Button, Card } from 'react-native-paper';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { usePaymentSheet } from "@stripe/stripe-react-native"

export default function Checkout({ navigation }) {

  const [address, setAddress] = useState()
  const [total, setTotal] = useState("0")
  const [ready, setReady] = useState(false)
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
    price()

}, []);


// console.log("items in cart ==========", cartItems);

function price() {

    const calculateTotalCost = cartItems.reduce((prevPrice, currentPrice) => {
        return prevPrice + currentPrice.price
    }, 0)

    const totalPrice = calculateTotalCost

    console.log("users total ======== ", totalPrice);

    setTotal(totalPrice)

}



  useEffect(() => {
    initializePaymentIntent();
  }, [])

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
            <Text style={{ fontSize: 12, paddingBottom: 10 }}>  Price: {item.price} </Text>

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
    return { paymentIntent }


  }

  //
  const initializePaymentIntent = async () => {

    const { paymentIntent } = await getpaymentIntent()

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: "Sky Cuisine",
      allowsDelayedPaymentMethods: true
    })

    if (error) {
      Alert.alert('Error')
    } else {
      setReady(true)
    }

  }


  //buy function

  const buy = async () => {
    const { error } = await presentPaymentSheet()
    // console.log( "line 207 buy fuction",error);
    if (error) {
      showMessage({
        message: "Error, Your payment was not successful ",
        // description: "This is our second message",
        type: "danger",
      });
      // Alert.alert('Error')
    } else {
      showMessage({
        message: "Great, Your payment has been verified, Your food is coming your way ",
        // description: "This is our second message",
        type: "success",
      });
      // Alert.alert('Great',"Your payment has been verified, Your food is coming your way")
      clearCart()
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
        <Text style={{ fontSize: 20 }} marginVertical={20}> Items</Text>

        <View style={styles.innerContainer} >


          {addedCard()}


        </View>


      </ScrollView>

      <View style={styles.TotalContainer}>

      <Text style={styles.appTotal}>Total Amount :                                 R {total}</Text>
        <View style={styles.actionContainer} >

        <TouchableOpacity onPress={buy} style={styles.actionButton} >

          <Text style={styles.signIn} >
            Proceed Payment</Text>

        </TouchableOpacity >
      </View>
      
      </View>
      <FlashMessage position={"top"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    // height: 250,
    paddingvertical: 80,
    backgroundColor: '#F2F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TopContainer: {
    flex: 0,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth:0.2,
    borderBlockColor: "#c4c4c4"
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

  // BottomContainer: {
  //   flex: 1,
  //   // backgroundColor: 'blue',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   width: '100%',
  //   height: 300,
  //   paddingBottom: 10,


  // },

  // innerContainer: {
  //   height: 380,
  //   width: "100%",
  //   padding: 10,
  //   // flex: 1,
  //   borderRadius: 20,
  //   marginBottom: 100,
  //   backgroundColor: 'blue',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },


  TotalContainer: {
    // fontFamily: ' berskshire',
    // fontSize: 18,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
    borderTopWidth: 0.2,
    borderBlockColor: "#c4c4c4"
},

BottomContainer: {
    flex: 0,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height:500,
    paddingBottom: 10,
    // borderTopWidth:0.5,
    // borderBlockColor:"#c4c4c4"

},

innerContainer: {
    height: 380,
    width: "100%",
    padding: 12,
    // flex: 1,
    borderRadius: 20,
    marginBottom: 100,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
},

  // innerContainer: {
  //   // height: 550,
  //   width: "100%",
  //   // padding: 10,
  //   // // flex: 1,
  //   // borderRadius: 20,
  //   // marginBottom: 5,
  //   backgroundColor: 'white',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',

  //   height: '100%',
  //   width: "100%",
  //   padding: 0,
  //   // flex: 1,
  //   // borderRadius: 20,
  //   marginBottom: 5,
  // },

  inputContainer: {
    // height:90,
    // flex: 1,
    top: 10,
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
    // // height: 220,
    // borderTopWidth:0.5,
    // borderTopColor:"black",
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
  // TotalContainer: {
  //   // fontFamily: ' berskshire',
  //   // fontSize: 18,
  //   // backgroundColor: 'yellow',
  //   alignItems: 'center',
  //   // justifyContent: 'flex-start',
  //   width: '100%',
  //   borderTopWidth: 0.5,
  //   borderBlockColor: "#c4c4c4"
  // },

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
    borderColor: ' #ACA567',
    borderWidth: 0.5
  },
  register: {
    color: '#ACA567',
    fontWeight: "400",
    letterSpacing: 2


  }


});
