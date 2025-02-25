import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const resetCount= () => {
        setCount(0);
    }
  return (
    <View style = {styles.t}>
      <Text>{count}</Text>
      <Button title='Increment' onPress={increment}/>
      <Button title='Reset' onPress={resetCount}/>
    </View>
  )
}

const styles = StyleSheet.create({
    t : {
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',
        margin : 10,
        padding : 10,
    }
})