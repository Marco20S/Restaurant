import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper'
import { ScrollView } from 'react-native';
import contntCard from './card';
import { useRoute } from '@react-navigation/native';



export default function Menu({ navigation }) {

    const route = useRoute();

    const [menuListMain, setMenuListMain] = useState([]);
    const [menuListCombo, setMenuListCombo] = useState([]);
    const [menuListSides, setMenuListSide] = useState([]);
    const [menuListDrink, setMenuListdrink] = useState([]);

    useEffect(() => {
        getMenulistMain()
        getMenulistCombo()
        getMenulistSides()
        getMenulistDrinks()
    }, [])

    //getting menu items from firestore

    const getMenulistMain = async () => {

        const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/mains`;

        await fetch(url).then(

            response => {


                return (response.json())
            }
        ).then(
            (json) => {

                const documents = json.documents

                // console.log(json);


                let myMenuArray = []

                documents.forEach(doc => {
                    const idarray = doc.name.split('/')


                    const id = idarray[idarray.length - 1];

                    myMenuArray.push({
                        id: id,
                        ...doc.fields
                    })


                })

                // console.log(" records ..........", myMenuArray);

                setMenuListMain(myMenuArray)


            }
        ).catch(
            error => console.log("error", error)
        );

    }

    const getMenulistCombo = async () => {

        const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/combos`;

        await fetch(url).then(

            response => {
                return (response.json())
            }

        ).then(
            (data) => {
                const documents = data.documents

                console.log(data);

                let myMenuArrays = []

                documents.forEach(doc => {
                    const idarray = doc.name.split('/')


                    const id = idarray[idarray.length - 1];

                    myMenuArrays.push({
                        id: id,
                        ...doc.fields
                    })


                })

                // console.log(" Combos ..........", myMenuArrays);

                setMenuListCombo(myMenuArrays)


            }
        ).catch(
            error => console.log("error", error)
        );

    }

    const getMenulistSides = async () => {

        const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/sides/?key=${key}`;

        await fetch(url).then(
            response => response.json()
        ).then(
            (json) => {
                const documents = json.documents

                let myMenuArray = []

                documents.forEach(doc => {
                    const idarray = doc.name.split('/')


                    const id = idarray[idarray.length - 1];

                    myMenuArray.push({
                        id: id,
                        ...doc.fields
                    })


                })

                // console.log(" records ..........", myMenuArray);

                setMenuListSide(myMenuArray)


            }
        ).catch(
            error => console.log("error", error)
        );

    }

    const getMenulistDrinks = async () => {

        const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
        const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/drinks/?key=${key}`;
    
        await fetch(url).then(
          response => response.json()
        ).then(
          (json) => {
            const documents = json.documents
    
            let myMenuArray = []
    
            documents.forEach(doc => {
              const idarray = doc.name.split('/')
    
    
              const id = idarray[idarray.length - 1];
    
              myMenuArray.push({
                id: id,
                ...doc.fields
              })
    
    
            })
    
            // console.log(" records ..........", myMenuArray);
    
            setMenuListdrink(myMenuArray)
    
    
          }
        ).catch(
          error => console.log("error", error)
        );
    
      }


    const menuItems = () => {
        getMenulistMain()
        getMenulistCombo()
        getMenulistSides()
    }

//displaying them on the screen
    function displayMain() {
        return menuListMain.map((data, index) => {
            return (
                <View marginVertical={10}>


                    <Card >

                        <TouchableOpacity onPress={() => { navigation.navigate('details', { data: data }) }}>
                            <Card.Cover source={{ uri: data.image?.stringValue }} />
                            {/* {console.log(data.name?.stringValue)} */}
                            <Card.Title title={data.name?.stringValue} subtitle={`R ${data.price?.stringValue}`} />

                            <Card.Actions>
                                <TouchableOpacity>
                                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                </TouchableOpacity>
                            </Card.Actions>

                        </TouchableOpacity>
                    </Card>
                </View>
            )
        })
    }

    function displayCombo() {

        return menuListCombo.map((data, index) => {
            return (
                <View marginVertical={10}>

                    

                    <Card >

                        <TouchableOpacity onPress={() => { navigation.navigate('details', { data: data }) }}>
                            <Card.Cover source={{ uri: data.image?.stringValue }} />
                            {/* {console.log(data.name?.stringValue)} */}
                            <Card.Title title={data.name?.stringValue} subtitle={`R ${data.price?.stringValue}`} />

                            <Card.Actions>
                                <TouchableOpacity>
                                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                </TouchableOpacity>
                            </Card.Actions>

                        </TouchableOpacity>
                    </Card>
                </View>
            )
        })
    }

    function displaySide() {
        return menuListSides.map((data, index) => {
            return (
                <View marginVertical={10}>

                    {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Combos </Text> */}

                    <Card >

                        <TouchableOpacity onPress={() => { navigation.navigate('details', { data: data }) }}>
                            <Card.Cover source={{ uri: data.image?.stringValue }} />
                            {/* {console.log(data.name?.stringValue)} */}
                            <Card.Title title={data.name?.stringValue} subtitle={`R ${data.price?.stringValue}`} />

                            <Card.Actions>
                                <TouchableOpacity>
                                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                </TouchableOpacity>
                            </Card.Actions>

                        </TouchableOpacity>
                    </Card>
                </View>
            )
        })
    }

    function displayDrink() {
        return menuListDrink.map((data, index) => {
            return (
                <View marginVertical={10}>

                    {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Combos </Text> */}

                    <Card >

                        <TouchableOpacity onPress={() => { navigation.navigate('details', { data: data }) }}>
                            <Card.Cover source={{ uri: data.image?.stringValue }} />
                            {/* {console.log(data.name?.stringValue)} */}
                            <Card.Title title={data.name?.stringValue} subtitle={`R ${data.price?.stringValue}`} />

                            <Card.Actions>
                                <TouchableOpacity>
                                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                </TouchableOpacity>
                            </Card.Actions>

                        </TouchableOpacity>
                    </Card>
                </View>
            )
        })
    }

    return (

        <View style={styles.container}>
            <View style={styles.TopContainer}>

                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} >Menu</Text>
                </View>
            </View>


            <View style={styles.BottomContainer}>

                <ScrollView style={styles.innerContainer} >
                    {/* <View style={styles.innerContainer}> */}

                    <View marginVertical={10}>

                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Meals</Text>

                        {displayMain()}
                    </View>



                    <View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Combos</Text>

                        {displayCombo()}
                    </View>


                    <View>

                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sides</Text>

                        {displaySide()}
                    </View>

                    <View>

                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Drinks</Text>

                        {displayDrink()}
                    </View>


                    {/* <View>
                        <Text>Drinks</Text>

                        <Card >

                            <TouchableOpacity>
                                <Card.Cover source={require('../assets/rest/Avo_salad.jpg')} />
                                <Card.Title title="Card Title" subtitle="Card Subtitle" />

                                <Card.Actions>
                                    <TouchableOpacity>
                                        <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                                    </TouchableOpacity>
                                </Card.Actions>

                            </TouchableOpacity>
                        </Card>
                    </View>
 */}



                </ScrollView>


            </View >

        </View >
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
        fontSize: 28,
        color: '#ACA567',
        // fontWeight:"bold"
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    BottomContainer: {
        flex: 2,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: 400,
        // paddingBottom: 10,

    },

    innerContainer: {
        height: 550,
        width: "100%",
        padding: 10,
        // flex: 1,
        // borderRadius: 20,
        marginBottom: 5,
        backgroundColor: 'white',
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
