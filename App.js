
import React, { useEffect,useState } from 'react';
import { NativeBaseProvider } from "native-base";
import { mmmmNavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/stack/MyStackNavigator';
import SplashScreen from './src/Config/SplashScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import { AuthProvider } from './src/Config/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany } from './src/screens/CompanySelection/Actions/fetchCompany';
export default function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage splash screen visibility

  useEffect(() => {
    // Set a timeout for how long to show the splash screen (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, hide the splash screen
    }, 3000); // Adjust the time (3000 ms = 3 seconds)

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Show SplashScreen while loading, and MyStackNavigator after loading
  return (
    <Provider store={store}> 
    <AuthProvider>
      {isLoading ? <SplashScreen /> : <MyStackNavigator />}
    </AuthProvider>
    </Provider>
  );
}

