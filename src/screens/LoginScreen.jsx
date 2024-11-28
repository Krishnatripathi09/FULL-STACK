import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("./assetss/topVector.png")} style={styles.topImage} />
            </View>
            <View style={styles.logInContainer}>
                <Text style={styles.logInText}>Log-In</Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Sign In Into Your Account</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"user"} size={24} color={"9A9A9A"} style={styles.inputIcon} />
                <TextInput style={styles.inputContainer} placeholder='E-mail' />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"lock"} size={24} color={"9A9A9A"} style={styles.inputIcon} />
                <TextInput style={styles.inputContainer} placeholder='Password' secureTextEntry />
            </View>
            <Text style={styles.forgetPasswordText}>Forgot Password</Text>
            <View style={styles.signInButtonContainer}>
                <Text style={styles.signIn}>Sign In</Text>
                
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
    textStyle: {
        textAlign: "center",
        fontSize: 18,
        color: "#262626",
        marginBottom: 30,
    },
    inputContainer: {
        backgroundColor: "#FFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 30,
        elevation: 10,
        marginVertical: 10,
        alignItems: "center",
        height: 50,
    },
    inputIcon: {
        marginLeft: 15,

    },
    texInput: {
        flex: 1,
    },
    forgetPasswordText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "90%",
        fontSize: 16,
    },
    signInButtonContainer: {

    },
    signIn: {
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold",
    }, linearGradient: {
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

})