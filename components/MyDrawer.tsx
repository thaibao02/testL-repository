import React, { useRef } from "react";
import { View, Text, TouchableOpacity, DrawerLayoutAndroid } from "react-native";

const MyDrawer = () => {
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const navigationView = () => (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Menu</Text>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <TouchableOpacity 
                onPress={() => drawer.current?.closeDrawer()} 
                style={{ marginTop: 20, padding: 10, backgroundColor: "#ddd" }}
            >
                <Text>Close drawer</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={250}
            drawerPosition="left"
            renderNavigationView={navigationView}
        >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity 
                    onPress={() => drawer.current?.openDrawer()} 
                    style={{ padding: 10, backgroundColor: "#2196F3", borderRadius: 5 }}
                >
                    <Text style={{ color: "#fff" }}>Open Drawer</Text>
                </TouchableOpacity>
                <Text> header</Text>
            </View>
            <View>Content</View>
        </DrawerLayoutAndroid>
    );
};

export default MyDrawer;
