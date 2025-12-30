import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Image, Button, Text, Center, Box } from 'native-base';
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import {  loginAction } from '../Login/Action/loginAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style/loginstyle'
import { AuthContext } from '../../Config/AuthContext';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const route = useRoute();
  const { login, storeUserArray, storeCompanyArray } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user?.current_user);

  const handleDoneAction = () => {
    console.log('Done button pressed');
  };
  const handleLogin = async () => {
    try {
      const response = await dispatch(loginAction(JSON.stringify({
        "username": userName,
        "password": userPassword,
      
      })));
    console.log("response=================================", response.payload.data.username)
      // Assuming response contains the user ID or token
      if (response.payload.success) {
      // console.log("response=================================", response.payload.data.username)
      storeUserArray("logineduser", response.payload.data.username);
      // storeUserArray("password", userPassword);
      storeUserArray("user_id", response.payload.data.user_id);
      login( response.payload.data.user_id)
      }

    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     // Instead of navigation.navigate('AddNew'), 
  //     // authenticate the user through your context
  //     // This will update userToken and automatically switch to AppStack
      
  //     // Example: If you have a login function in your context
  //     login("some_user_token"); // Pass the actual token/user ID
      
  //     // Store other user data
  //     storeUserArray("logineduser", userName);
  //     storeUserArray("password", userPassword);
  //     storeUserArray("user_id", "01");
      
  //     // The navigation will happen automatically when userToken is set
      
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };
  
  const handlePasswordChange = (text) => {
    setUserPassword(text);
  };

  const handleUsernameChange = (text) => {
    setUserName(text);
  };

  return (
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{ flex: 1 }}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ 
      flex: 1, 
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    
    }}>
      
      <Box
        bg="white"     
        shadow={4}
        rounded="lg"
        maxWidth="85%"
        minWidth="85%"
     
      >
        <Center>
          <Text style={style.title}>Login</Text>
          
          <Box
            bg="white"
            shadow={4}
            rounded="lg"
            width="90%"
            marginTop={4}
            marginBottom={3}
            padding={2}
          >
            <TextInput
              placeholder="Username"
              style={{
                width: '90%',
                height: 35,
                fontSize: 14,
                color: '#000'
              }}
              value={userName}
              onChangeText={handleUsernameChange}
              onSubmitEditing={handleDoneAction}
            />
          </Box>
          
          <Box
            bg="white"
            shadow={4}
            rounded="lg"
            width="90%"
            marginBottom={4}
            padding={2}
          >
            <TextInput
              placeholder="Password"
              style={{
                width: '90%',
                height: 35,
                fontSize: 14,
                color: '#000'
              }}
              value={userPassword}
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              onSubmitEditing={handleLogin}
            />
          </Box>
          
          <Button style={style.button} onPress={handleLogin}>
            <Text style={{ color: 'white', fontFamily: 'InterTight-SemiBold' }}>
              Login
            </Text>
          </Button>
        </Center>
      </Box>
      
    </View>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
  );
};

export default LoginScreen;