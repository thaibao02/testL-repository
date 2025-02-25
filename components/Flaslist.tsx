import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
  { id: '4', title: 'Fourth Item' },
  { id: '5', title: 'Fifth Item' },
  { id: '6', title: 'Sixth Item' },
  { id: '7', title: 'Seventh Item' },
  { id: '8', title: 'Eighth Item' },
  { id: '9', title: 'Ninth Item' },
  { id: '10', title: 'Tenth Item' },
  { id: '11', title: 'First Item' },
  { id: '12', title: 'Second Item' },
  { id: '13', title: 'Third Item' },
  { id: '14', title: 'Fourth Item' },
  { id: '15', title: 'Fifth Item' },
  { id: '16', title: 'Sixth Item' },
  { id: '17', title: 'Seventh Item' },
  { id: '18', title: 'Eighth Item' },
  { id: '19', title: 'Ninth Item' },
  { id: '20', title: 'Tenth Item' },
  { id: '21', title: 'First Item' },
  { id: '22', title: 'Second Item' },
  { id: '23', title: 'Third Item' },
  { id: '24', title: 'Fourth Item' },
  { id: '25', title: 'Fifth Item' },
  { id: '26', title: 'Sixth Item' },
  { id: '27', title: 'Seventh Item' },
  { id: '28', title: 'Eighth Item' },
  { id: '29', title: 'Ninth Item' },
  { id: '30', title: 'Tenth Item' }
]

interface ItemProps{
  item: {id : String, title : String};
  onpress: () => void;
}
const Item = (props:ItemProps) => {
  return (
    <TouchableOpacity onPress={props.onpress}>
      <View style = {{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor : "#f9c2ff", margin : 4}}>
        <Text>{props.item.id} - {props.item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const onPressHandle = (item: { id: any; title: any; }) => {
  Alert.alert('You clicked on: ' ,'You pressed on ' + item.id +  ' - ' + item.title)
}
const FlastList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default FlastList;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
