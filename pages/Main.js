import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

// import 


export default function Main({ navigation }) {

  const [mealName, setMealName] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [menuListMain, setMenulistMain] = useState([])


  let deviceHeight = Dimensions.get('window').height
  let deviceWidth = Dimensions.get('window').width

  const [catagory, setCatagory] = useState('')
  const [selectedCategory, setSelectedCategory] = useState()

  console.log('------------', menuListMain);

  // logout function
  const logout = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      Alert.alert("Success", "User has logged out Successfully")
      navigation.navigate('login')
    })

  }

  //Admin upload
  const selections = async () => {

    const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/selections/meals`

    const documentData = {
      fields:
      {
        "name": { stringValue: mealName },
        "image": { stringValue: image },
        "description": { stringValue: description },
        "price": { stringValue: price },
      }
    };

    try {
      const response = await fetch(url, {

        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
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

  //get menu from  firestore

  const getMenulistMain = async () => {

    const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
    const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/main/?key=${key}`;

    await fetch(url).then(
      response => response.json()
    ).then(
      (json) => {
        const documents = joson.documents

        let myMenuArray = []

        documents.forEach(doc => {
          const idarray = doc.name.split('/')


          const id = idarray[idarray.length - 1];

          myMenuArray.push({
            id: id,
            ...doc.fields
          })


        })

        console.log(" records ..........", myMenuArray);

        setMenulistMain(myMenuArray)


      }
    )

  }

  const getMenulistCombo = async () => {

    const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
    const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/combos/?key=${key}`;

    await fetch(url).then(
      response => response.json()
    ).then(
      (json) => {
        const documents = joson.documents

        let myMenuArray = []

        documents.forEach(doc => {
          const idarray = doc.name.split('/')


          const id = idarray[idarray.length - 1];

          myRecordArray.push({
            id: id,
            ...doc.fields
          })


        })

        console.log(" records ..........", myMenuArray);

        setRecordingFile(myMenuArray)


      }
    )

  }

  const getMenulistSides = async () => {

    const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
    const url = `https://firestore.googleapis.com/v1/projects/restaurantapp-38fda/databases/(default)/documents/category/meals/sides/?key=${key}`;

    await fetch(url).then(
      response => response.json()
    ).then(
      (json) => {
        const documents = joson.documents

        let myMenuArray = []

        documents.forEach(doc => {
          const idarray = doc.name.split('/')


          const id = idarray[idarray.length - 1];

          myRecordArray.push({
            id: id,
            ...doc.fields
          })


        })

        console.log(" records ..........", myMenuArray);

        setRecordingFile(myMenuArray)


      }
    )

  }


  const menuItems = () => {
    getMenulistMain()
    getMenulistCombo()
    getMenulistSides()
  }

  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>

        <View style={{ width: '100%', paddingRight: 10, paddingTop: 40, paddingBottom: 10, alignItems: "flex-end", }}>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Avatar.Image size={40} backgroundColor={'#ACA567'} source={require('../assets/rest/user2.png')} />
          </TouchableOpacity>
        </View>


        <Text paddingLeft={10} paddingBottom={10} >Hi Customer. Welcome to Sky Cuisine the best pasta in South Africa. </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }} >Selections</Text>


        <View style={{ padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >



          <View style={[{ ...styles.cardSelection, borderBottomWidth: 'Meals' == catagory ? 2 : 0 }]}>
            <TouchableOpacity onPress={() => setCatagory("Meals")}>
              <Avatar.Image size={60} source={require('../assets/rest/Spaghetti_and_tomatos.jpg')} />
              <Text style={{ color: 'Meals' == catagory ? '#ACA567' : null }}>   Meals</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ ...styles.cardSelection, borderBottomWidth: 'Combos' == catagory ? 2 : 0 }]}>
            <TouchableOpacity onPress={() => setCatagory("Combos")}>
              <Avatar.Image size={60} source={require('../assets/rest/Don_Combo.jpg')} />
              <Text style={{ color: 'Combos' == catagory ? '#ACA567' : null }}> Combos</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ ...styles.cardSelection, borderBottomWidth: 'Sides' == catagory ? 2 : 0 }]}>
            <TouchableOpacity onPress={() => setCatagory("Sides")}>
              <Avatar.Image size={60} source={require('../assets/rest/Avo_salad.jpg')} />
              <Text style={{ color: 'Sides' == catagory ? '#ACA567' : null }} >   Sides</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ ...styles.cardSelection, borderBottomWidth: 'Drinks' == catagory ? 2 : 0 }]}>
            <TouchableOpacity onPress={() => setCatagory("Drinks")}>
              <Avatar.Image size={60} source={require('../assets/rest/whitewine.jpg')} />
              <Text style={{ color: 'Drinks' == catagory ? '#ACA567' : null }}>   Drinks</Text>
            </TouchableOpacity>
          </View>



        </View>


      </View>



      {/* <ScrollView style={styles.BottomContainer}>

        <View><Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10, paddingTop: 10 }} >Popular Meals</Text></View>


        <View style={{ flex: 0, flexDirection: 'row', flexWrap: 'wrap', width: 350  }}>



          <Card style={{ width: "48%", marginHorizontal: "1%", marginVertical:'2%'}} borderWidth={0.001} borderColor='#ACA567' >

            <TouchableOpacity>
              <Card.Cover source={require('../assets/rest/Don_Combo.jpg')} />

              <Card.Title title="Don Combo" subtitle="Card Subtitle" />
            </TouchableOpacity>

          </Card>

          <Card style={{ width: "48%", height: 280, marginHorizontal: "1%",marginVertical:'2%' }} borderWidth={0.001} borderColor='#ACA567' >

            <TouchableOpacity>
              <Card.Cover source={require('../assets/rest/Don_Combo.jpg')} />

              <Card.Title title="Don Combo" subtitle="Card Subtitle" />
            </TouchableOpacity>

          </Card>
          <Card style={{ width: "48%", height: 280, marginHorizontal: "1%", marginVertical:'2%' }} borderWidth={0.001} borderColor='#ACA567' >

            <TouchableOpacity>
              <Card.Cover source={require('../assets/rest/Don_Combo.jpg')} />

              <Card.Title title="Don Combo" subtitle="Card Subtitle" />
            </TouchableOpacity>

          </Card>


        </View>

      


      </ScrollView> */}
      <Text>UUUUUUUUUUUUUUUUUUUUUUUU
      </Text>





      <FlatList
      style={styles.BottomContainer}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => {
          return (
            <Text>{item}
          </Text>
          )
          


        }} />

      





      { //   <View style={{ flex: 0, flexDirection: 'row', flexWrap: 'wrap', width: 350  }}>

        //   <Card style={{ width: "48%", marginHorizontal: "1%", marginVertical:'1%' }} borderWidth={0.001} borderColor='#ACA567' >

        //   <TouchableOpacity>
        //     <Card.Cover source={{uri: data.image?.stringValue}} />

        //     <Card.Title title="Don Combo" subtitle="Card Subtitle" />
        //   </TouchableOpacity>

        // </Card>

        // </View>
      }




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
    // flex: 0.6,
    // backgroundColor: 'green',
    alignItems: 'flex-start',
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
    flex: 2,
    // backgroundColor: 'blue',
    paddingLeft: 5,
    paddingBottom: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },

  innerContainer: {
    height: "100%",
    width: '100%',
    // padding: 30,
    // flex: 1,
    // borderRadius: 20,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
    width: 160,
    height: 130,



  },
  innerProductContainer: {
    // height: 350,
    // width: '50%',
    // padding: 30,
    // flex: 1,
    // borderRadius: 20,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
    width: 160,
    height: 130,



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


  },

  cardSelection: {
    borderBottomWidth: 1,
    borderColor: '#ACA567',


  }

});