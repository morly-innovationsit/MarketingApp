import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text, RefreshControl, Image } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getList, getListbyName } from './Action/ViewListAction';
import LocationMapScreen from '../Location/LocationMapScreen';

const DetailPage = ({ route }) => {
  const dispatch = useDispatch();
  const { company, itemData } = route.params;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      setLoading(true);
      
      const resultAction = await dispatch(getListbyName({
        "company": company
      }));
      
      console.log("result by name  ==========", resultAction.payload)
      
      if (getListbyName.fulfilled.match(resultAction)) {
        const responseData = resultAction.payload;
        
        if (responseData) {
          setList([responseData]);
          console.log("results: by name", responseData);
        } else {
          console.log("No data in response");
          setList([]);
        }
      } else {
        console.log("Failed to fetch list");
        setList([]);
      }
    } catch (error) {
      console.log("Error fetching list:", error);
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Card.Content>
        <Text style={styles.itemTitle}>Company Name : {item.company}</Text>
        
        {item.boardpic && item.boardpic.data && (
          <Image 
            source={{ uri: item.boardpic.data }}
            style={styles.boardImage}
            resizeMode="cover"
          />
        )}

        {/* Pass saved coordinates to LocationMapScreen */}
        <LocationMapScreen 
          savedLat={item.lat}
          savedLong={item.long}
          visible={true}
          onLocationChange={(latitude, longitude) => {
            // This will update when user changes location
            console.log("Location updated:", latitude, longitude);
          }}
         
        />
        
        <Text style={styles.itemLabel}>Software: <Text style={styles.itemValue}>{item.software}</Text></Text>
        {item.softwarename && (
          <Text style={styles.itemLabel}>Software Name: <Text style={styles.itemValue}>{item.softwarename}</Text></Text>
        )}
        <Text style={styles.itemLabel}>Satisfied: <Text style={styles.itemValue}>{item.satisfied}</Text></Text>
        {item.website && (
          <Text style={styles.itemLabel}>Website: <Text style={styles.itemValue}>{item.website}</Text></Text>
        )}
        {item.email && (
          <Text style={styles.itemLabel}>Email: <Text style={styles.itemValue}>{item.email}</Text></Text>
        )}
        {item.fleetstrength && (
          <Text style={styles.itemLabel}>Fleet Strength: <Text style={styles.itemValue}>{item.fleetstrength}</Text></Text>
        )}
        
        {item.contact1name && (
          <View style={styles.contactSection}>
            <Text style={styles.sectionTitle}>Contact 1</Text>
            <Text style={styles.itemLabel}>Name: <Text style={styles.itemValue}>{item.contact1name}</Text></Text>
            <Text style={styles.itemLabel}>Designation: <Text style={styles.itemValue}>{item.designation1}</Text></Text>
            <Text style={styles.itemLabel}>GSM: <Text style={styles.itemValue}>{item.GSM1}</Text></Text>
            <Text style={styles.itemLabel}>Email: <Text style={styles.itemValue}>{item.email1}</Text></Text>
          </View>
        )}
        
        {item.contact2name && (
          <View style={styles.contactSection}>
            <Text style={styles.sectionTitle}>Contact 2</Text>
            <Text style={styles.itemLabel}>Name: <Text style={styles.itemValue}>{item.contact2name}</Text></Text>
            <Text style={styles.itemLabel}>Designation: <Text style={styles.itemValue}>{item.designation2}</Text></Text>
            <Text style={styles.itemLabel}>GSM: <Text style={styles.itemValue}>{item.GSM2}</Text></Text>
            <Text style={styles.itemLabel}>Email: <Text style={styles.itemValue}>{item.email2}</Text></Text>
          </View>
        )}
     
        {item.notes && (
          <Text style={styles.itemLabel}>Notes: <Text style={styles.itemValue}>{item.notes}</Text></Text>
        )}
        
        {item.image && item.image.length > 0 && (
          <View style={styles.imagesContainer}>
            <Text style={styles.sectionTitle}>Visiting Card :</Text>
            {item.image.map((img, index) => (
              <Image
                key={index}
                source={{ uri: img.data }}
                style={styles.additionalImage}
                resizeMode="cover"
              />
            ))}
          </View>
        )}
      </Card.Content>
    </View>
  );

  // Empty state
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No items found</Text>
    </View>
  );

  // Show loading indicator while fetching
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list || []}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={list?.length === 0 && styles.emptyList}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchList}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    margin: 16,
    backgroundColor: '#fff',
  },
  card: {
    margin: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  boardImage: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  itemLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    fontWeight: '600',
  },
  itemValue: {
    fontWeight: '400',
    color: '#333',
  },
  contactSection: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6200ee',
  },
  imagesContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  additionalImage: {
    width: '100%',
    height: 400,
    marginBottom: 8,
    borderRadius: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  emptyList: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailPage;