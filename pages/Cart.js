import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState, useContext, useRef } from 'react'
import { Avatar, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '../CartContext/cartContext';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Cart({ route, navigation }) {


    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState("0")

    const animation = useRef(null);

    // removes item that user deletes
    useEffect(() => {

        const saveCartToAsync = async (cart) => {

            try {
                await AsyncStorage.setItem('cart', JSON.stringify(cart))


            } catch (error) {
                console.error(error)

            }

        }

        saveCartToAsync(cartItems)

    }, [cartItems])


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

    }, [])


    function addedCard() {
        return cartItems.map((item) => {

            return (

                <Card height={"30%"} contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, }}>

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

                            <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                        </TouchableOpacity>

                    </View>

                </Card>)

        })
    }




    return (

        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Your Shopping Cart</Text>
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
                    </View> */}
 {addedCard()}

                    <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Your cart is empty</Text>

                   

                </View>


            </ScrollView>

            <View style={styles.TotalContainer}>
                <Text style={styles.appTotal}>Total Amount :                                 R {total}</Text>

                <View style={styles.actionContainer} >
                    <TouchableOpacity onPress={() => { navigation.navigate('checkout', ) }} style={styles.actionButton} >

                        <Text style={styles.signIn} >
                            Go to checkout</Text>

                    </TouchableOpacity >
                    <Text></Text>

                    <TouchableOpacity style={styles.actionButton1} onPress={() => { navigation.navigate('main') }} >

                        <Text style={styles.register} >
                            Add Items</Text>

                    </TouchableOpacity >
                </View>
                <Text></Text>
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

    TopContainer: {
        // flex: 0.4,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // borderBottomWidth: 0.5,
        // borderBlockColor: "#c4c4c4"
    },

    appName: {
        // fontFamily: ' berskshire',
        fontSize: 20,
        color: '#ACA567',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    appTotal: {
        // fontFamily: ' berskshire',
        fontSize: 19,
        color: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
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

    BottomContainer: {
        flex: 0,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        // height:200
        paddingBottom: 10,
        // borderTopWidth:0.5,
        // borderBlockColor:"#c4c4c4"

    },

    innerContainer: {
        height: 450,
        width: "100%",
        padding: 10,
        // flex: 1,
        borderRadius: 20,
        marginBottom: 5,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    inputContainer: {
        // height:90,
        // flex: 1,
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
        // height: 90,
        marginBottom: 10,
        width: "100%",
        top: 10,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    actionButton: {
        // flex: 1,
        backgroundColor: '#ACA567',
        borderRadius: 5,
        height: 45,
        width: 150,
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
        width: 400,
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
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    actionButton1: {
        // flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        height: 45,
        width: 150,
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        color: 'black',
        borderColor:' #ACA567',
        borderWidth:0.5
    },
    register: {
      color: '#ACA567',
      fontWeight:"400",
      letterSpacing:2
    
    
    }

});
