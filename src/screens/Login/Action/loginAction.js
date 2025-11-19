
import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../../Config/axios';
import { storeUserData } from '../../../Config/AsyncStoarge';
// import RootURL from '../../Config/urlConstants'


export const loginAction = createAsyncThunk('login', async (resbody) => {
  // const res = await fetch('http://192.168.1.12:3600/company');
  console.log("fetch in redux",resbody);

  try{

  const res = await axiosInstance.post('user/login',resbody);
  console.log("data from redux:",res.data.user_name)
  // storeUserData('',res.data.user_name,res.data.co_code,res.data.user_id)
   
  //const final = await res.json();
  // console.log("data from redux:",{...final})
   console.log("data from loginredux:",res.data)   
  return res.data;

} catch(error){
  console.error('Error fetching data:', error);
} 
});

export const currentuser = createAsyncThunk('currentuser' , async(body) => {
  try{
  const res = await axiosInstance.get( `company/${body.co_code}`);
  console.log("           mdbfdjhbhsdbhdsb          ", `company/${body.co_code}`)
  console.log("          mdbfdjhbhsdbhdsb           ", res.data)
  return res.data;
  }catch(error){
    console.error('Error fetching data:', error);
  }   
} )