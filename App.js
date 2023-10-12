import 'react-native-gesture-handler';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { auth } from './Config/firebase';
import { collection, doc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react';

import OnBoarding from './pages/OnBoarding';
import Signup from './pages/Signup';
import Login from './pages/Login';
import StartUpWindow from './pages/StartUpWindow';
// import Cartfrom './pages/Cart';
// import Checkout from './pages/Checkout';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Favourite from './pages/Favourite';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Details from './pages/Details';
// import Main from './pages/main';


const Tab = createMaterialBottomTabNavigator();


const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(28, 28, 30)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(242, 242, 242)',
    text: 'rgb(28, 28, 30)',
    // border: 'rgb(199, 199, 204)',
    notification: 'blue',
    shadowColor: "transparent",
  },
};

export default function App() {


  useEffect(() => { }, [])

  useEffect(() => {
    console.log("outside ===== OnAuth change")

    auth.onAuthStateChanged(async (name) => {

      if (name) {
        console.log("OnAuth change", name)

        // const emailRef = await getDoc(doc(database, 'admin', user.email))
        // const emailRef = doc(collection(database, 'admin', user.email))
        // const onSnapshot = await getDoc(emailRef)

        // console.log('Email Reference from firestore', emailRef.data());

        // if ( emailRef.exists()) {

        //   console.log('Document database',  emailRef.data());
        //   //setUP(EmailRef)

        //   // navigate('/')
        // }
        // else {
        //   //setUP()
        // }

        const docRef = doc(database, 'users', name.email);
        const docSnap = await getDoc(docRef);

        console.log(docRef.firestore.toJSON());

        if (docSnap.exists()) {
          const emailRef = docSnap.data();

          // do something with emailRef
          console.log('Document database', emailRef);
          // setUP(emailRef)


        } else {
          console.log("No such document exists!");

        }

      } else {
        // setUP(null)
      }

    })
  }, [])

  function HomeTab(){
    <Tab.Navigator  initialRouteName="main"
    shifting={true}
    // labeled={false}
    sceneAnimationEnabled={true}
    activeColor="black"
    inactiveColor="white"
    barStyle={{ backgroundColor: '#ACA567' }}>

    <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome5 name="user" size={24} color={color} />),}}  name='profile' component={Profile}  />
    <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Menu', tabBarIcon: ({ color }) => (<MaterialIcons name="menu-book" size={24} color={color} />),}}  name='menu' component={Menu} />
    <Tab.Screen  name='main' component={Main} options={{headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),}}/>
    <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Cart', tabBarIcon: ({ color }) => (<MaterialIcons name="shopping-cart" size={24} color={color} />),}}  name='checkout' component={Cart} />
    <Tab.Screen name='favorite' options={{ headerShown: true,tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={24} color={color} />),}} component={Favourite} />
    <Tab.Screen name='details' options={{ headerShown: true,tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={24} color={color} />),}} component={Details} />
  </Tab.Navigator>

  }

  return (


    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View> screenOptions={{ headerShown: false }} tabBarBadge: 3

    < NavigationContainer theme={MyTheme} >

      {/* <Stack.Navigator screenOptions={{}} >
        <Stack.Screen options={{ headerShown: false }} name='onBoarding' component={OnBoarding} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }}name='home' component={HomeTab}/>
      </Stack.Navigator> */}

<Tab.Navigator  initialRouteName="main"
    shifting={true}
    // labeled={false}
    sceneAnimationEnabled={true}
    activeColor="black"
    inactiveColor="white"
    barStyle={{ backgroundColor: '#ACA567' }}>

    <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome5 name="user" size={24} color={color} />),}}  name='profile' component={Profile}  />
    <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Menu', tabBarIcon: ({ color }) => (<MaterialIcons name="menu-book" size={24} color={color} />),}}  name='menu' component={Menu} />
    <Tab.Screen  name='main' component={Main} options={{headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),}}/>
    <Tab.Screen options={{  headerShown: true, tabBarLabel: 'Cart', tabBarIcon: ({ color }) => (<MaterialIcons name="shopping-cart" size={24} color={color} />),}}  name='checkout' component={Cart} />
    <Tab.Screen name='favorite' options={{ headerShown: true,tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={24} color={color} />),}} component={Favourite} />
    <Tab.Screen name='details' options={{ headerShown: true,tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={24} color={color} />),}} component={Details} />
  </Tab.Navigator>

     


    </NavigationContainer >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2F2',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
