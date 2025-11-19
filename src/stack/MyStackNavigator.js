import React, { useEffect,useState,useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Config/AuthContext';
import { NativeBaseProvider } from "native-base";
import SplashScreen from '../Config/SplashScreen';
// Import your screens
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import AddNew from '../screens/AddNew/AddNew';


// Create a stack navigator
const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
     <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} /> 
    </Stack.Navigator>
);

const AppStack = () => (
    <Stack.Navigator>
    {/* <Stack.Screen options={{ headerShown: false }} name="FingerPrint" component={Fingerprint} /> */}
    <Stack.Screen options={{ headerShown: false }} name="AddNew" component={AddNew} />

    {/* <Stack.Screen options={{ headerShown: false }} name="Drawer" component={MyDrawer} /> */}

    </Stack.Navigator>
);

const MyStackNavigator = () => {
    const { userToken, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <SplashScreen />;  // Or a loading spinner
    }

    return (
        <NavigationContainer>
             <NativeBaseProvider>
            {userToken ? <AppStack/> : <AuthStack/>}
            </NativeBaseProvider>
        </NavigationContainer>
    );
};

export default MyStackNavigator;