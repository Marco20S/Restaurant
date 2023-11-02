import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext/cartContext';



export default function HomeTab() {

    const [count, setCount] = useState(0)


    // useEffect(() => {
    //     setCount(cartItems.length)
    // }, [cartItems])

    // const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
    // console.log(cartItems);

    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="main"
            shifting={true}
            height={100}
            // labeled={false}
            sceneAnimationEnabled={true}
            activeColor="black"
            inactiveColor="white"
            barStyle={{ backgroundColor: '#ACA567', radius: 100, height: 64 }}>

            <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome5 name="user" size={20} color={color} />), }} name='profile' component={Profile} />
            <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Menu', tabBarIcon: ({ color }) => (<MaterialIcons name="menu-book" size={20} color={color} />), }} name='menu' component={Menu} />
            <Tab.Screen name='main' component={Main} options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={20} />), }} />
            <Tab.Screen options={{ headerShown: true, tabBarLabel: 'Cart',  tabBarIcon: ({ color }) => (<MaterialIcons name="shopping-cart" size={20} color={color} />), }} name='cart' component={Cart} />
            <Tab.Screen name='favorite' options={{ headerShown: true, tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={20} color={color} />), }} component={Favourite} />
            {/* tabBarBadge: count<Tab.Screen name='details' options={{ headerShown: true, tabBarLabel: 'Favorite', tabBarIcon: ({ color }) => (<MaterialIcons name="favorite" size={24} color={color} />), }} component={Details} /> */}
        </Tab.Navigator>
    )


}