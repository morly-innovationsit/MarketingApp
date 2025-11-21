import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const AddedList = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Company Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        autoCapitalize="words"
        style={styles.input}
      />
        <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        autoCapitalize="words"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    marginBottom: 16,
    width: '100%',
  },
});

export default AddedList;