// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
//   ActivityIndicator,
//   Platform,
//   Linking,
// } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import Entypo from 'react-native-vector-icons/Entypo';

// export default function LocationMapScreen({ onLocationChange }) {
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);

  
//   const getCurrentLocation = () => {
//     setLoading(true);
    
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const newLocation = {
//           latitude,
//           longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         };
//         setLocation(newLocation);
        
//         // Send lat/long to parent component
//         if (onLocationChange) {
//           onLocationChange(latitude, longitude);
//         }
        
//         setLoading(false);
//       },
//       (error) => {
//         setLoading(false);
//         Alert.alert('Error', error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 10000
//       }
//     );
//   };

//   const resetLocation = () => {
//     setLocation(null);
//     // Clear lat/long in parent component
//     if (onLocationChange) {
//       onLocationChange('', '');
//     }
//   };

//   const openInGoogleMaps = () => {
//     if (location) {
//       const url = Platform.select({
//         ios: `maps:0,0?q=${location.latitude},${location.longitude}`,
//         android: `geo:0,0?q=${location.latitude},${location.longitude}`,
//       });
      
//       Linking.openURL(url).catch(() => {
//         Alert.alert('Error', 'Unable to open maps');
//       });
//     }
//   };

// return (
// <View style={styles.container}>
  
//   <View style={{ position: 'relative', marginTop: 10 }} >
//     <Image 
//       style={{ 
//         width: '100%',
//         height: 100,
//         borderRadius: 5
//       }} 
//       source={require('../../imgs/googlemap.jpg')}
//     />
    
//     <View style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       borderRadius: 5,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#fff" />
//       ) : !location ? (
//         <>
//           <TouchableOpacity   onPress={getCurrentLocation}>
//           <Text style={{
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: '#fff'
//           }}>Add Location </Text>
//           <Entypo name="location" size={19} marginTop={6} color={'red'} style={{ alignSelf: 'center' }} />
//           </TouchableOpacity>
         
//         </>
//       ) : (
//         <TouchableOpacity onPress={resetLocation}>
//           <Text style={{
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: '#fff'
//           }}>
//             Reset Location
//           </Text>
//           <Entypo name="cw" size={19} marginTop={6} color={'#fff'} style={{ alignSelf: 'center' }} />
//         </TouchableOpacity>
//       )}
//     </View>
//   </View>

//   {location && (
//     <View style={styles.locationInfo}>
//       <Text style={styles.coordLabel}>Latitude: {location.latitude.toFixed(6)}</Text>
//       <Text style={styles.coordLabel}>Longitude: {location.longitude.toFixed(6)}</Text>
      
//       <TouchableOpacity
//         style={styles.mapButton}
//         onPress={openInGoogleMaps}
//       >
//         <Text style={styles.mapButtonText}>Open in Google Maps</Text>
//       </TouchableOpacity>
//     </View>
//   )}

//   {location && (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       style={styles.map}
//       region={location}
//     >
//       <Marker
//         coordinate={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//         }}
//         title="You are here"
//         description="Current Location"
//       />
//     </MapView>
//   )}
// </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f5f5f5',
//   },

//   locationInfo: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 5,
//     elevation: 3,
   
//   },
 
//   mapButton: {
//     backgroundColor: '#10b981',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 12,
//   },
//   mapButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   // map: {
//   //   flex: 1,
//   //   margin: 20,
//   //   borderRadius: 12,
//   //   overflow: 'hidden',
//   // },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
  Platform,
  Linking,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Entypo from 'react-native-vector-icons/Entypo';

export default function LocationMapScreen({ onLocationChange, savedLat, savedLong , visible}) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize location from saved coordinates
  useEffect(() => {
    if (savedLat && savedLong && !isNaN(savedLat) && !isNaN(savedLong)) {
      const savedLocation = {
        latitude: parseFloat(savedLat),
        longitude: parseFloat(savedLong),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setLocation(savedLocation);
    }
  }, [savedLat, savedLong]);

  const getCurrentLocation = () => {
    setLoading(true);
    
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLocation = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setLocation(newLocation);
        
        // Send lat/long to parent component
        if (onLocationChange) {
          onLocationChange(latitude, longitude);
        }
        
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        Alert.alert('Error', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      }
    );
  };

  const resetLocation = () => {
    setLocation(null);
    // Clear lat/long in parent component
    if (onLocationChange) {
      onLocationChange('', '');
    }
  };

  const openInGoogleMaps = () => {
    if (location) {
      const url = Platform.select({
        ios: `maps:0,0?q=${location.latitude},${location.longitude}`,
        android: `geo:0,0?q=${location.latitude},${location.longitude}`,
      });
      
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Unable to open maps');
      });
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={{ position: 'relative', marginTop: 10 }}>
        <Image 
          style={{ 
            width: '100%',
            height: 100,
            borderRadius: 5
          }} 
          source={require('../../imgs/googlemap.jpg')}
        />
        
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {loading? (
            <ActivityIndicator size="large" color="#fff" />
          ) : !location ? (
            <>
              <TouchableOpacity onPress={getCurrentLocation}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#fff'
                }}>Add Location</Text>
                <Entypo name="location" size={19} marginTop={6} color={'red'} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={resetLocation}>
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff'
              }}>
                Reset Location
              </Text>
              <Entypo name="cw" size={19} marginTop={6} color={'#fff'} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {location && (
        <View style={styles.locationInfo}>
          <Text style={styles.coordLabel}>Latitude: {location.latitude.toFixed(6)}</Text>
          <Text style={styles.coordLabel}>Longitude: {location.longitude.toFixed(6)}</Text>
          
          <TouchableOpacity
            style={styles.mapButton}
            onPress={openInGoogleMaps}
          >
            <Text style={styles.mapButtonText}>Open in Google Maps</Text>
          </TouchableOpacity>
        </View>
      )}

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  locationInfo: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  coordLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  mapButton: {
    backgroundColor: '#10b981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  map: {
    width: '100%',
    height: 250,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
});