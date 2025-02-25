
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyFunctionComponent() {
  return (
    <View style = {styles.t}>
      <Text>This is my funtion components</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    t : {
        margin : 20,
        color : 'red',
        fontSize : 30,
    }
})


