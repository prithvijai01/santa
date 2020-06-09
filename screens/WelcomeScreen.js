import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state = {
            EmailID:"",
            password:""
        }
    }
    render(){
        return(
            <View>
                <Text style = {styles.title}>
                    Book Santa
                </Text>
                <TextInput style = {styles.loginBox}
                placeholder = "Email - address"
                keyboardType = "Email - address"
                onChangeText = {(Text) => {
                    this.setState({EmailID:Text})
                }}/>


                <TextInput style = {styles.loginBox}
                placeholder = "Enter a password"
                secureTextEntry = {true}
                onChangeText = {(Text) => {
                    this.setState({password:Text})
                }}/>
            </View>
        )
    }
    
}
