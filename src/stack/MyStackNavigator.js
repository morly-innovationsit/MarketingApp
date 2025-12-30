import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthContext } from '../Config/AuthContext';
import { NativeBaseProvider } from "native-base";
import SplashScreen from '../Config/SplashScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import AddNew from '../screens/AddNew/AddNew';
import AddedList from '../screens/AddedList/AddedList'
import LocationMapScreen from '../screens/Location/LocationMapScreen';
import DetailPage from '../screens/AddedList/DetailPage'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

// Top Tab Navigator
const AddNewTopTabs = () => (
  <TopTab.Navigator
    screenOptions={{
    tabBarActiveTintColor: '#393d3f', // Selected tab text color
    tabBarInactiveTintColor: 'gray', // Unselected tab text color
    tabBarIndicatorStyle: {
      backgroundColor: '#393d3f', // Selection indicator bar color
      height: 3,
    },
    tabBarStyle: {
      backgroundColor: 'white', // Tab bar background
    },
  }}>
    <TopTab.Screen 
      name="AddNewTab" 
      component={AddNew} 
      options={{ title: 'Add New' }}
    />
      <TopTab.Screen 
      name="ListTab" 
      component={AddedList} 
      options={{ title: 'List ' }}
    />
  </TopTab.Navigator>
);

// Drawer Navigator
const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen 
      name="AddNewDrawer" 
      component={AddNewTopTabs}
      options={{ title: ' ' }}
    />
  </Drawer.Navigator>
);

// Main Navigator
const MyStackNavigator = () => {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {userToken ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MyDrawer} />
            <Stack.Screen name="LocationMapScreen" component={LocationMapScreen} />
            <Stack.Screen name="ListTab" component={AddedList} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default MyStackNavigator;