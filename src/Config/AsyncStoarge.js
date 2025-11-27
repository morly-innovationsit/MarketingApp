import AsyncStorage from '@react-native-async-storage/async-storage';
import MyStackNavigator from '../stack/MyStackNavigator';

// Function to store user session data
export const storeUserData = async (token, username,co_code, userid) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', co_code);
    await AsyncStorage.setItem('user_id', userid);
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

// Function to retrieve user session data
export const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const username = await AsyncStorage.getItem('username');
    const co_code = await AsyncStorage.getItem('password');
    const userid = await AsyncStorage.getItem('user_id');
    return { token, username, co_code, userid };
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export const storeUserArray = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Array stored successfully!');
  } catch (e) {
    console.error('Failed to store the array.', e);
  }
};
export const removeArray = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Array removed successfully!');
  } catch (e) {
    console.error('Failed to remove the array.', e);
  }
};
export const getUserArray = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to retrieve the array.', e);
  }
};
// Function to clear user session data
export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    await AsyncStorage.removeItem('user_id');
{/* <MyStackNavigator/> */}
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
};
