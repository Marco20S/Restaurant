import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';



export default function Details({ route, navigation }) {

    const { data } = route.params
    // console.log(data);

    const Pricetag = Number(data.price?.stringValue)

    const [value, setValue] = useState(1);
    const [price, setPrice] = useState(Pricetag)




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



    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Details</Text>
                </View>
            </View>


            <View style={styles.BottomContainer}>

                <ScrollView style={styles.innerContainer} >
                    {/* <View style={styles.innerContainer}> */}

                    <View >

                        <Card style={{ width: '100%' }} >
                            <Card.Cover style={{ height: 350, borderColor: 'black', borderRadius: 0, width: 400 }} source={{ uri: data.image?.stringValue }} />
                        </Card>

                    </View>

                    <View>

                        <Card style={{ height: 300, borderColor: 'black', borderRadius: 0, width: 400, backgroundColor: '#f2f2f2' }}>


                            <Card.Content style={{ height: 250, borderColor: 'black', borderRadius: 0, width: 400, backgroundColor: '#f2f2f2' }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }} variant="titleLarge">{data.name?.stringValue}</Text>
                                <Text>Description:</Text>
                                <Text style={{ fontSize: 20, fontWeight: "200", paddingBottom: 10 }} variant="bodyMedium">{data.description?.stringValue}</Text>
                                <Text>Price: </Text>
                                <Text style={{ fontSize: 20, fontWeight: "100", paddingBottom: 10 }} variant="bodyMedium">R {data.price?.stringValue}</Text>


                                <Card.Actions style={{ marginRight: 30, justifyContent: "space-between" }}>

                                    <View padding={8} backgroundColor={'#c4c4c4'} width={'30%'} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 230 }} >

                                        {/* <TouchableOpacity>

                                            <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                                        </TouchableOpacity> */}
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

                                    <Button style={{backgroundColor:"#ACA567", }} mode="contained" onPress={() => (navigation.navigate('checkout', { data: data, price:price, quantity:value }))}>
                                        Add to cart   R{price}
                                    </Button>


                                    {/* <Button onPress={() => (console.log('Added'))}>Cancel </Button> */}
                                    {/* <Button>Ok</Button> */}
                                </Card.Actions>


                            </Card.Content>







                        </Card>


                    </View>



                </ScrollView>




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
        height: 300,
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
