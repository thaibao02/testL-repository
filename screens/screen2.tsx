import { RouteProp } from "@react-navigation/native";
import { RootstackParamList } from "../types/NavigationType";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

type Screen2Props = {
    route: RouteProp<RootstackParamList, "Detail">;
    navigation: StackNavigationProp<RootstackParamList, "Detail">;
};

const Screen2: React.FC<Screen2Props> = ({ route, navigation }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome {route.params.name}</Text>
            <Button title="Go home" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 20, 
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Screen2;
