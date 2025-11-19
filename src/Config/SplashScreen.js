import React,{useContext,useEffect} from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import {  useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../Config/AuthContext';
import { currentuser, loginAction } from '../screens/Login/Action/loginAction';
const SplashScreen = () => {
    const { getUserArray } = useContext(AuthContext);
    dispatch = useDispatch()

    useEffect(() => {
        const fetchUserToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                console.log(token)
                if(token){
                  const userName = await getUserArray('logineduser');
                  const userPassword = await getUserArray('password');
                  const value = await getUserArray('user_id');
    
                 await dispatch(loginAction(JSON.stringify({
                    "username": userName,
                    "password": userPassword,
                    "user_id": value
                  })));
               await dispatch(currentuser({ "user_id": value }));
    
              }
               
            } catch (error) {
                console.error("Failed to fetch user token:", error);
            }
        };
    
        fetchUserToken();
    }, []);
    return (
        <View style={styles.container}>
        <Image 
        style={{ width: '25%', // 30% of the screen width
        height: '25%', // 30% of the screen height
 
       }} 
        source={require('../imgs/marketing.png')}/>

        <Text style={{fontStyle: 'italic',fontWeight:'600' }}>Marketing.....</Text>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
});

export default SplashScreen;
