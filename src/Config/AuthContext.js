import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [iscompany, setCompany] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                let token = await AsyncStorage.getItem('userToken');
                setUserToken(token);
            } catch (error) {
                console.error('Failed to load token', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadToken();
    }, []);

    const login = async (token) => {
        setUserToken(token);
        await AsyncStorage.setItem('userToken', token);
    };
    const company = async (cmpy) => {
      setCompany(cmpy);
      await AsyncStorage.setItem('company', cmpy);
  };
    const logout = async () => {
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
        removeArray('user');
        removeArray('logineduser')
        removeArray('password');
        removeArray('co_code')
    };
    const storeUserArray = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
          console.log('Array stored successfully!',jsonValue);
        } catch (e) {
          console.error('Failed to store the array.', e);
        }
      };      
         
      const storeCompanyArray = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
          console.log('Array stored successfully!',jsonValue);
        } catch (e) {
          console.error('Failed to store the array.', e);
        }
      };   
      
       const removeArray = async (key) => {
        try {
          await AsyncStorage.removeItem(key);
          console.log('Array removed successfully!');
        } catch (e) {
          console.error('Failed to remove the array.', e);
        }
      };
       const getUserArray = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          console.error('Failed to retrieve the array.', e);
        }
      };
  
    return (
        <AuthContext.Provider value={{ userToken, company,login, logout, storeUserArray,removeArray,getUserArray ,storeCompanyArray,isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
