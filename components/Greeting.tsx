import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface GreetingProps{
    name : string;
    address ?: string;
}
export default function Greeting(props : GreetingProps) {
  return (
    <View>
      <Text>Name : {props.name}</Text>
      {props.address && <Text>Address : {props.address}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({})