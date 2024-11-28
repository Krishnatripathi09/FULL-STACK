import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("./assetss/topVector.png")} style={styles.topImage} />
            </View>
            <View style={styles.logInContainer}>
                <Text style={styles.logInText}>Log-In</Text>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    topImageContainer: {
        heigth: 50
    },
    topImage: {
        width: "100%",
        height: "130",
    },
    logInContainer: {
        //borderWidth: 1,

    },
    logInText: {
        textAlign: "center",
        fontSize: 70,
        fontWeight: "800",
        color: "#262626"
    },
})