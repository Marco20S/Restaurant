import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Avatar, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../CartContext/cartContext';
import { serverTimestamp } from '@firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';



export default function Details({ route, navigation }) {

    const { data } = route.params
    // console.log(data);

    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);


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

    const Pricetag = Number(data.price?.stringValue)

    const [value, setValue] = useState(1);
    const [price, setPrice] = useState(Pricetag)
    // const [item, setItem] = useState()


    // setItem(price,data.id)
    // console.log(item);


   
    function increment() {
        const currentValue = value + 1
        setValue(currentValue)
        newPrice(currentValue)

    }

    function decrement() {

        if (value === 1) return
        const currentValue = value - 1
        setValue(currentValue)
        newPrice(currentValue)

    }

    function newPrice(currentValue) {

        const updatedPrice = Pricetag * currentValue
        setPrice(updatedPrice)


    }

    function added() {

        const addedItem = {
            uri: data.image?.stringValue,
            name: data.name?.stringValue,
            id: data.id,
            quantity: value,
            price: price
        }

        showMessage({
            message: "Great, Item Was Added to Cart",
            // description: "This is our second message",
            type: "success",
        });

        addToCart(addedItem)

    }


    // console.log(addToCart);

    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 0, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Details</Text>
                </View>
            </View>


            <View style={styles.BottomContainer}>

                <ScrollView style={styles.innerContainer} >
                    {/* <View style={styles.innerContainer}> */}

                    <View >

                        <Card style={{ width: '100%' }} >
                            <Card.Cover style={{ height: 350, borderColor: 'black', borderRadius: 0, marginRight: 5, width: 400 }} source={{ uri: data.image?.stringValue }} />
                        </Card>

                    </View>

                    <View>

                        <Card style={{ justifyContent: 'center', height: 290, borderColor: 'black', borderRadius: 0, width: "100%", marginRight: 0, backgroundColor: '#f2f2f2' }}>

                            <Card.Content style={{ height: 350, borderColor: 'black', borderRadius: 0, width: 400, backgroundColor: '#f2f2f2' }}>
                                <Text style={{ fontSize: 19, fontWeight: "bold", paddingBottom: 10 }} variant="titleLarge">{data.name?.stringValue}</Text>
                                <Text>Description:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "200", paddingBottom: 10 }} variant="bodyMedium">{data.description?.stringValue}</Text>
                                <Text>Price: </Text>
                                <Text style={{ fontSize: 18, fontWeight: "100", paddingBottom: 10 }} variant="bodyMedium">R {data.price?.stringValue}</Text>


                                <Card.Actions style={{ marginRight: 30, justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>

                                    <View padding={8} backgroundColor={'#c4c4c4'} width={'30%'} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 230 }} >

                                        <TouchableOpacity onPress={decrement}>
                                            {/*<MaterialCommunityIcons name="delete-empty" size={24} color="black" /> */}
                                            <MaterialCommunityIcons name="minus" size={24} color="black" />
                                        </TouchableOpacity>

                                        <Text> {value} </Text>

                                        <TouchableOpacity onPress={increment}>
                                            {/**/}
                                            <MaterialIcons name="add" size={24} color="black" />
                                        </TouchableOpacity>

                                    </View>

                                    <Button style={{ backgroundColor: "#ACA567", }} mode="contained" onPress={added}>
                                        Add to cart   R{price}
                                    </Button>

                                    {/* <Button onPress={() => (console.log('Added'))}>Cancel </Button> */}
                                    {/* <Button>Ok</Button> */}

                                </Card.Actions>

                            </Card.Content>

                        </Card>

                    </View>

                </ScrollView>
                <FlashMessage position={"top"} />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 250,
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
        flex: 1,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: "100%",
        paddingBottom: 0,


    },

    innerContainer: {
        // height: 550,
        // width: "100%",
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
