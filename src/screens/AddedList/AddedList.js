import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator,
   Text, RefreshControl, Image, TouchableHighlight } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from './Action/ViewListAction';

const AddedList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(getList());
      
      // Check if the action was fulfilled
      if (getList.fulfilled.match(resultAction)) {
        setList(resultAction.payload);
        console.log("results:", resultAction.payload);
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
 // Handle navigation when item is pressed
  const handleItemPress = (item) => {
    navigation.navigate('DetailPage', { 
      company: item.company,
      itemData: item  // Pass the entire item if you need more data
    });
  };
  // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
       <Card.Content>
        <TouchableHighlight
          onPress={() => handleItemPress(item)}
          underlayColor="#f0f0f0"
          style={styles.touchable}
        >
          <Text style={styles.itemTitle}>Company Name : {item.company}</Text>
        </TouchableHighlight>
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
    backgroundColor:'white'
  },
  boardImage: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    padding:15,
    color: '#333',
  },
  itemLabel: {
    fontSize: 14,
    color: '#666',
   
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
    height: 150,
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

export default AddedList;