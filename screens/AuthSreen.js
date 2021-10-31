import React from 'react';
import {ScrollView, KeyboardAvoidingView, StyleSheet, Button} from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';

import * as authActions from '../actions/auth'


const AuthScreen = props =>{

    const loginHandler = () => {
        let action = authActions.login(email, password)
    };

return(
    <KeyboardAvoidingView
    behavior="padding"
    KeyboardVerticalOffset={50}
    style={styles.screen}
    >
    <Card style={styles.authContainer}>
        <ScrollView>
            <Input
            id="email"
            label="Email"
            keyBoardType='email-address'
            required
            errorMessage="Please enter a valid email"
            onValueChange= {()=> {}}
            initValue=''
            />
            <Input
            id="password"
            label="Password"
            keyBoardType='default'
            minLength={6}
            required
            errorMessage="Please enter a valid password"
           onValueChange= {()=> {}}
            initValue=''
            />
            <Button title="Login" onPress={loginHandler}></Button>
        </ScrollView>
    </Card>
</KeyboardAvoidingView>
);
};

export default AuthScreen;

const styles = StyleSheet.create({
screen: {
 justifyContent: 'center',
 margin: 10
},
authContainer: {

}

});