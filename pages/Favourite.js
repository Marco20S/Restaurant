import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Favourite() {
    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Favourites</Text>
                </View>
            </View>


            <View style={styles.BottomContainer}>

                <ScrollView style={styles.innerContainer} >
                    {/* <View style={styles.innerContainer}> */}

                    <Card marginBottom={20} >

                        

                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Title title="Cheese Salad" subtitle="Details" />

                            <Card.Actions>
                               <Button>Add to cart</Button>
                            </Card.Actions>
                        
                    </Card>


                    <Card >

                        <TouchableOpacity>

                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Title title="Card Title" subtitle="Card Subtitle" />

                            <Card.Actions>
                                {/* <TouchableOpacity>
                                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                </TouchableOpacity> */}
                            </Card.Actions>
                        </TouchableOpacity>
                    </Card>


                </ScrollView>




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
        padding: 10,
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
