import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity,Alert,Image,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LocationMapScreen from '../Location/LocationMapScreen'
const AddNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [softwarename, setSoftwareName] = useState('');
  const [softwareYes,setSoftwareYes] = useState('')
  const [softwareNo,setSoftwareNo] = useState('')
  const [satisfiedYes,setSatisfiedYes] = useState('')
  const [satisfiedNo,setSatisfiedNo] = useState('')
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

  const [selectedImage, setSelectedImage] = useState(null);
 // Separate state for each image
  const [boardPhoto, setBoardPhoto] = useState(null);
  const [visitingCard1, setVisitingCard1] = useState(null);
  const [visitingCard2, setVisitingCard2] = useState(null);
  const [visitingCard3, setVisitingCard3] = useState(null);
  const [visitingCard4, setVisitingCard4] = useState(null);
   // Options for image picker
  const imagePickerOptions = {
    mediaType: 'photo',
    quality: 1,
    maxWidth: 1000,
    maxHeight: 1000,
    includeBase64: false,
  };



  // Show options to choose between camera and gallery
   const handleImageUpload = (setImageFunction, imageType) => {
    Alert.alert(
      'Upload Image',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: () => handleTakePhoto(setImageFunction),
        },
        {
          text: 'Choose from Gallery',
          onPress: () => handleSelectFromGallery(setImageFunction),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

 const handleSelectFromGallery = (setImageFunction) => {
    launchImageLibrary(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        setImageFunction({
          uri: image.uri,
          type: image.type,
          name: image.fileName,
          fileSize: image.fileSize,
        });
      }
    });
  };

  const handleTakePhoto = (setImageFunction) => {
    launchCamera(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        setImageFunction({
          uri: image.uri,
          type: image.type,
          name: image.fileName,
          fileSize: image.fileSize,
        });
      }
    });
  };
 // Reusable ImageUploadSection component
  const ImageUploadSection = ({ image, onPress, label }) => (
    <View style={styles.imageUploadContainer}>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          <Text style={styles.imageInfo}>
            {image.name} ({(image.fileSize / 1024).toFixed(2)} KB)
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={onPress}>
        <Text style={styles.uploadText}>
          {image ? `Change ${label}` : label}
        </Text>
        <Entypo name="image" size={20} color={'#696868'} />
      </TouchableOpacity>
    </View>
  );
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

  {/* <View style={{flexDirection:'row',marginTop: 8,  gap: 10,
  justifyContent:'center',alignItems:'center'}}>
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
  </View> */}
<View>
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
      }}>
        Add Location
      </Text>
       <Entypo name="location" size={19} marginTop={6} color={'red'} />
    </View>
  </View>
</View>
 <ImageUploadSection 
          image={boardPhoto}
          onPress={() => handleImageUpload(setBoardPhoto, 'Board Photo')}
          label="Board Photo"
        />

        <ImageUploadSection 
          image={visitingCard1}
          onPress={() => handleImageUpload(setVisitingCard1, 'Visiting Card 1')}
          label="Visiting Card Photo 1"
        />

        <ImageUploadSection 
          image={visitingCard2}
          onPress={() => handleImageUpload(setVisitingCard2, 'Visiting Card 2')}
          label="Visiting Card Photo 2"
        />

        <ImageUploadSection 
          image={visitingCard3}
          onPress={() => handleImageUpload(setVisitingCard3, 'Visiting Card 3')}
          label="Visiting Card Photo 3"
        />

        <ImageUploadSection 
          image={visitingCard4}
          onPress={() => handleImageUpload(setVisitingCard4, 'Visiting Card 4')}
          label="Visiting Card Photo 4"
        />


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
{softwareYes &&(
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
)}


 <View style={{flexDirection:'row', marginTop: 9, gap: 5, alignItems: 'center'}}>
  <Text>Satisfied :</Text>
  <View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  <CheckBox
  value={satisfiedYes}
  onValueChange={(value) => {
  setSatisfiedYes(value);
  if(value) setSatisfiedNo(false);
  }}
  />
 <Text>Yes</Text>
</View>
    
<View style={{flexDirection:'row', alignItems:'center', gap: 3}}>
  
<CheckBox
  value={satisfiedNo}
  onValueChange={(value) => {
  setSatisfiedNo(value);
  if(value) setSatisfiedYes(false);
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



<View style={{flexDirection:'row',marginTop: 8,  gap: 10,}}>
<TextInput
label="Fleet Strength"
value={fleetstrength}
onChangeText={setFleetStrength}
mode="outlined"
autoCapitalize="none"
keyboardType="email-address"
activeOutlineColor="#393d3f"
textColor="#393d3f" 
style={{flex:0.4}}
/>
<TextInput
label="Website"
          value={website}
          onChangeText={setWebSite}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          activeOutlineColor="#393d3f"
          textColor="#393d3f" 
    style={{flex:1}}
        />
</View>
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
          style={{flex:0.4}}
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
<View style={{flexDirection:'row',justifyContent:'center',gap:10}}>
  <View style={styles.button}>

 <Text style={{ color: 'white', fontFamily: 'InterTight-SemiBold' }}>
 Cancel
  </Text>
</View>
<View style={styles.button}>

 <Text style={{ color: 'white', fontFamily: 'InterTight-SemiBold' }}>
 Login
  </Text>
</View>

</View>
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
    button:{
      width:"40%",
      height: 50,
      backgroundColor:'#393d3f',
      alignItems:'center',
      textAlign:"center",
      justifyContent:'center',
      borderRadius:10,
      marginTop:20,
      marginBottom:10
    },
  scrollContent: {
    padding: 20,
  },
  input: {
    marginTop: 8,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageUploadContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    padding: 15,
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageInfo: {
    fontSize: 12,
    color: '#666',
  },
  uploadButton: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  uploadText: {
    textDecorationLine: 'underline',
    color: '#393d3f',
  },
  submitButton: {
    backgroundColor: '#393d3f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default AddNew;