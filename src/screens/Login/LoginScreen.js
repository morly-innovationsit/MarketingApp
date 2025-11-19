import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Image, Button, Text, Center, Box } from 'native-base';
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { currentuser, loginAction } from '../../Login/Actions/loginAction';
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
      // Instead of navigation.navigate('AddNew'), 
      // authenticate the user through your context
      // This will update userToken and automatically switch to AppStack
      
      // Example: If you have a login function in your context
      login("some_user_token"); // Pass the actual token/user ID
      
      // Store other user data
      storeUserArray("logineduser", userName);
      storeUserArray("password", userPassword);
      storeUserArray("user_id", "01");
      
      // The navigation will happen automatically when userToken is set
      
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
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
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ 
          flex: 1, 
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          
          <Box
            bg="white"
            style={style.card}
            shadow={4}
            rounded="lg"
            maxWidth="90%"
            minWidth="90%"
          >
            <Center>
              <Text style={style.title}> Login </Text>
              
              <Box
                bg="white"
                style={style.card}
                shadow={4}
                rounded="lg"
                maxWidth="90%"
                minWidth="90%"
                padding={2}
              >
                <TextInput
                  placeholder="Username"
                  style={{maxWidth:"90%", borderRadius:1, borderColor:"black"}}
                  value={userName}
                  onChangeText={handleUsernameChange}
                  onSubmitEditing={handleDoneAction}
                />
              </Box>
              
              <Box
                bg="white"
                style={style.card}
                shadow={4}
                rounded="lg"
                maxWidth="90%"
                minWidth="90%"
                padding={2}
              >
                <TextInput
                  placeholder="Password"
                  w="85%"
                  value={userPassword}
                  secureTextEntry={true}
                  onChangeText={handlePasswordChange}
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