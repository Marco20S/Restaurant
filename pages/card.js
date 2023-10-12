import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper'
import { ScrollView } from 'react-native';


export default function ContentCard() {
  return (
    <View marginVertical={10}>

    <Text>Meals</Text>


    <Card marginBottom={20} >

        <TouchableOpacity>

            <Card.Cover source={require('../assets/rest/cheese_salad.jpg')} />
            <Card.Title title="Cheese Salad" subtitle="Details" />

            <Card.Actions>
                <TouchableOpacity>
                    <MaterialIcons name="favorite" size={24} color="black" padding={10} />
                </TouchableOpacity>
            </Card.Actions>

        </TouchableOpacity>
    </Card>
</View>
  )
}