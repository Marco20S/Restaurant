import { View, Text, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

export default function StartUpWindow() {
  return (
    <Image source={ require('../assets/rest/Sky_Cuisine_logos_transparent.png') } style={{ paddingRight:20, height: "90%", width: '100%', }}>
        
      {/* <Text>StartUpWindow</Text> */}
    </Image>
  )
}