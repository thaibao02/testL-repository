import React from "react";
import { View, Text, SectionList } from "react-native";

const DATA = [
  {
    title: "Fruits",
    data: ["Apple", "Banana", "Mango", "Pineapple", "Grapes"],
  },
  {
    title: "Vegetables",
    data: ["Potato", "Tomato", "Onion", "Carrot", "Cucumber"],
  },
  {
    title: "Meat",
    data: ["Chicken", "Beef", "Pork", "Mutton", "Fish"],
  },
];

const MySectionList = () => {
  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: "bold", fontSize: 18, backgroundColor: 'lightblue'}}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default MySectionList;
