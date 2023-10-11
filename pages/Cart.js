import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cart({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Your Shopping Cart</Text>
                </View>
            </View>


            <ScrollView style={styles.BottomContainer}>

                <View style={styles.innerContainer} >
                    {/* </TouchableOpacity><TouchableOpacity> <View style={styles.innerContainer}>paddingLeft={10 } */}

                    <Card height={"30%"} contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20,  marginBottom: 5, }}>



                        <View >
                            <Avatar.Image size={90} source={require('../assets/rest/Avo_salad.jpg')} />
                        </View>

                        <View justifyContent='flex-start' padding={5} >
                            <Text style={{ fontSize: 20 }} > Don Combo  </Text>
                            <Text>  Price: R 55.00  </Text>

                        </View>

                        <View padding={5} backgroundColor={'#c4c4c4'} width={'30%'} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity>
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/*<MaterialCommunityIcons name="delete-empty" size={24} color="black" /> */}
                                <MaterialCommunityIcons name="minus" size={24} color="black" />
                            </TouchableOpacity>

                            <Text> 2 </Text>

                            <TouchableOpacity>
                                {/**/}
                                <MaterialIcons name="add" size={24} color="black" />
                            </TouchableOpacity>


                        </View>

                    </Card>
                    
                   
                </View>


            </ScrollView>

            <View style={styles.TotalContainer}>
                <Text style={styles.appTotal}>Total Amount :                                 R 55.00</Text>

                <View style={styles.actionContainer} >
                    <TouchableOpacity onPress={()=>{navigation.navigate('checkout')}} style={styles.actionButton} >

                        <Text style={styles.signIn} >
                            Go to checkout</Text>

                    </TouchableOpacity >
                    <Text></Text>

                    <TouchableOpacity style={styles.actionButton} onPress={()=>{navigation.navigate('main')}} >

                        <Text style={styles.signIn} >
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
        flex: 2,
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
        height: 120,
        top: 10,
        // // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
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


    }

});