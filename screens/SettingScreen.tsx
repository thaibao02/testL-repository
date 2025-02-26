import React from "react";
import { StyleSheet, View, Text } from "react-native";
const SettingScreen = () => {
    return(
        <View style={style.screen}>
            <Text style={style.title}>Setting Screen</Text>
        </View>
    )
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "lightblue",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
});

export default SettingScreen;