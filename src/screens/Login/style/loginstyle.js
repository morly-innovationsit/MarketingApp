import {  StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container:{

    backgroundColor:'white'
  
    },
    title: {
      fontWeight: '500',
      color: 'black',
      fontSize: 20,
      margin:10,
     fontFamily:'InterTight-SemiBold'
    },
    top_Image:{
      width:"100%",
     
    },
    card:{
      margin: 12,
      elevation:4
    },
    logo: {
      height:"18%",
      width:"20%",
      borderRadius:40
    },
    button:{
      width:"90%",
      height: 50,
      backgroundColor:'#393d3f',
      alignItems:'center',
      textAlign:"center",
      justifyContent:'center',
      borderRadius:12,
      marginTop:20,
      marginBottom:10
    },
     
      card_style:{
        backgroundColor:'white',
        borderRadius:10,
        width:"90%", 
        shadowRadius: 1.41,
      elevation: 4,
      alignItems: 'center',
      margin:20,
      justifyContent: 'center'
      },
      input:{

      }
})    
export default style;