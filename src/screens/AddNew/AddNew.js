import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
const AddNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
   const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
   const [softwarename, setSoftwareName] = useState('');
   const [softwareYes,setSoftwareYes] = useState('')
   const [softwareNo,setSoftwareNo] = useState('')
  const [newplans,setNewPlans] = useState('')
  const [comment, setComment] = useState('');
 const [website, setWebSite] = useState('');
   const [fleetstrength,setFleetStrength] = useState('')
  const [landline, setLandLine] = useState('');
  const [name1, setname1] = useState('');
 const [designation1, setDesignation1] = useState('');
   const [gsm1,setGSM1] = useState('')
  const [email1, setEmail1] = useState('');

    const [name2, setname2] = useState('');
 const [designation2, setDesignation2] = useState('');
  const [gsm2,setGSM2] = useState('')
  const [email2, setEmail2] = useState('');

  
 const [smprofile1, setSMProfile1] = useState('');
const [smprofile2, setSMProfile2] = useState('');
const [smprofile3, setSMProfile3] = useState('');
const [smprofile4, setSMProfile4] = useState('');
const [notes, setNotes] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <TextInput
          label="Company Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          autoCapitalize="words"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={styles.input}
        />
        <View style={{flexDirection:'row',marginTop: 8,  gap: 10,justifyContent:'center',
          alignItems:'center'}}>
        <TextInput
          label="latitude"
          value={lat}
          onChangeText={setLat}
          mode="outlined"
          autoCapitalize="words"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={{flex:1}}
        />
          <TextInput
          label="longitude"
          value={long}
          onChangeText={setLong}
          mode="outlined"
          autoCapitalize="words"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={{flex:1}}
        />
          <Entypo name="location" size={23} color={'#696868'} />
        </View>

      <View style={{flexDirection:'row',marginTop: 9,  gap: 5}}>
      <Text style={{   textDecorationLine: 'underline'}}>Take Board Photo  </Text>
      <Entypo name="image" size={20} color={'#696868'} />
      </View>
 <View style={{flexDirection:'row',marginTop: 9,  gap: 5}}>
      <Text style={{   textDecorationLine: 'underline'}}>Visiting Card Photo 1</Text>
      <Entypo name="image" size={20} color={'#696868'} />
      </View>
       <View style={{flexDirection:'row',marginTop: 9,  gap: 5}}>
      <Text style={{   textDecorationLine: 'underline'}}>Visiting Card Photo 2</Text>
      <Entypo name="image" size={20} color={'#696868'} />
      </View>
       <View style={{flexDirection:'row',marginTop: 9,  gap: 5}}>
      <Text style={{   textDecorationLine: 'underline'}}>Visiting Card Photo 3</Text>
      <Entypo name="image" size={20} color={'#696868'} />
      </View>
       <View style={{flexDirection:'row',marginTop: 9,  gap: 5}}>
      <Text style={{   textDecorationLine: 'underline'}}>Visiting Card Photo 4</Text>
      <Entypo name="image" size={20} color={'#696868'} />
      </View>

  <View style={{flexDirection:'row', marginTop: 9, gap: 5, alignItems: 'center'}}>
  <Text>Software Y/N:</Text>
  <View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  <CheckBox
  value={softwareYes}
  onValueChange={(value) => {
  setSoftwareYes(value);
  if(value) setSoftwareNo(false);
  }}
  />
 <Text>Yes</Text>
</View>
    
<View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  
<CheckBox
  value={softwareNo}
  onValueChange={(value) => {
  setSoftwareNo(value);
  if(value) setSoftwareYes(false);
  }}
/>
<Text>No</Text>
</View>
</View>
       <TextInput
          label="Software Name"
          value={softwarename}
          onChangeText={setSoftwareName}
          mode="outlined"
          autoCapitalize="none"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={styles.input}
        />

         <View style={{flexDirection:'row', marginTop: 9, gap: 5, alignItems: 'center'}}>
  <Text>Satisfied :</Text>
  <View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  <CheckBox
  value={softwareYes}
  onValueChange={(value) => {
  setSoftwareYes(value);
  if(value) setSoftwareNo(false);
  }}
  />
 <Text>Yes</Text>
</View>
    
<View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  
<CheckBox
  value={softwareNo}
  onValueChange={(value) => {
  setSoftwareNo(value);
  if(value) setSoftwareYes(false);
  }}
/>
<Text>No</Text>
</View>
</View>

 <TextInput
label="Plans for new Software"
value={newplans}
onChangeText={setNewPlans}
mode="outlined"
autoCapitalize="none"
keyboardType="email-address"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
style={styles.input}
/>
<View style={{marginTop: 10}}>
  <Text style={{fontSize: 14, marginBottom: 5}}>Comments:</Text>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: '#393d3f',
      borderRadius: 5,
      padding: 10,
      height: 100,
      textAlignVertical: 'top',
    }}
    multiline={true}
   numberOfLines={3}
    value={comment}
    onChangeText={setComment}
    placeholder="Enter your comments here..."
    blurOnSubmit={false}  // Prevents keyboard from closing on Enter
    returnKeyType="default"  // Shows proper return key
  />
</View>

<TextInput
label="Fleet Strength"
value={fleetstrength}
onChangeText={setFleetStrength}
mode="outlined"
autoCapitalize="none"
keyboardType="email-address"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
style={styles.input}
/>

<View style={{flexDirection:'row',marginTop: 8,  gap: 10,}}>

<TextInput
label="LandLine"
          value={landline}
          onChangeText={setLandLine}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={{flex:0.5}}
        />

<TextInput
label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
          style={{flex:1}}
        />

          </View>
<TextInput
label="Website"
          value={website}
          onChangeText={setWebSite}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />
<View style={{flexDirection:'row',marginTop: 25,  gap: 10,justifyContent:'center',alignItems:'center'}}>

<View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
  flex:0.5
}} />
<Text>Contact 1</Text>
<View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
 flex:0.5
}} />
</View>
<View style={{flexDirection:'row',marginTop: 25,  gap: 10,justifyContent:'center',alignItems:'center'}}>

<TextInput
label="name"
          value={name1}
          onChangeText={setname1}
          mode="outlined"
          autoCapitalize="none"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={{flex:1.5}}
        />
        <TextInput
label="Designation"
          value={designation1}
          onChangeText={setDesignation1}
          mode="outlined"
          autoCapitalize="none"
         
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={{flex:1}}
        />
        </View>
        <TextInput
label="GSM"
          value={gsm1}
          onChangeText={setGSM1}
          mode="outlined"
          autoCapitalize="none"
       
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />
        <TextInput
label="Email"
          value={email1}
          onChangeText={setEmail1}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />


<View style={{flexDirection:'row',marginTop: 25,  gap: 10,justifyContent:'center',alignItems:'center'}}>

<View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
  flex:0.5
}} />
<Text>Contact 2</Text>
<View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
 flex:0.5
}} />
</View>
<View style={{flexDirection:'row',marginTop: 25,  gap: 10,justifyContent:'center',alignItems:'center'}}>

<TextInput
label="name"
          value={name2}
          onChangeText={setname2}
          mode="outlined"
          autoCapitalize="none"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={{flex:1.5}}
        />
        <TextInput
label="Designation"
          value={designation2}
          onChangeText={setDesignation2}
          mode="outlined"
          autoCapitalize="none"
         
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={{flex:1}}
        />
        </View>
        <TextInput
label="GSM"
          value={gsm2}
          onChangeText={setGSM2}
          mode="outlined"
          autoCapitalize="none"
       
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />
        <TextInput
label="Email"
          value={email2}
          onChangeText={setEmail2}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />


              <TextInput
label="Email"
          value={email2}
          onChangeText={setEmail2}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={styles.input}
        />

  <View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
  marginTop:25,
  width:'100%',
  marginBottom:25
}} />
<TextInput
label="Social Media Profile 1"
value={smprofile1}
onChangeText={setSMProfile1}
mode="outlined"
autoCapitalize="none"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
/>
<TextInput
label="Social Media Profile 2"
value={smprofile2}
onChangeText={setSMProfile2}
mode="outlined"
autoCapitalize="none"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
/>
<TextInput
label="Social Media Profile 3"
value={smprofile3}
onChangeText={setSMProfile3}
mode="outlined"
autoCapitalize="none"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
/>
<TextInput
label="Social Media Profile 4"
value={smprofile4}
onChangeText={setSMProfile4}
mode="outlined"
autoCapitalize="none"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
/>
  <View style={{
  height: 1,
  backgroundColor: '#D3D3D3',
  marginTop:25,
  width:'100%',
  marginBottom:15
}} />
<TextInput
label="Notes"
value={notes}
onChangeText={setNotes}
mode="outlined"
autoCapitalize="none"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
/>
</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  input: {
    marginTop: 8,
    backgroundColor: '#fff'
  },
});

export default AddNew;