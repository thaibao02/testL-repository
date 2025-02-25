import { StackNavigationProp } from "@react-navigation/stack";
import { RootstackParamList } from "../types/NavigationType";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";

type Screen1Props = {
    navigation: StackNavigationProp<RootstackParamList, 'Screen1'>;
};

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
    const [name, setName] = useState<string>("");

    const handeltSubmit = () => {
        if (name.trim() === "") {
            alert("Please enter your name");
        } else {
            navigation.navigate("Screen2", { name: name }); 
        }
    };

    return (
        <View style={style.screen}>
            <Text style={style.title}>Enter your name</Text>
            <TextInput
                style={style.input}
                placeholder="Your name"
                onChangeText={setName}
                value={name}
            />
            <Button title="Next" onPress={handeltSubmit} />
        </View>
    );
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

export default Screen1;
