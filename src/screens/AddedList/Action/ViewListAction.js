import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../../Config/axios';
import { storeUserData } from '../../../Config/AsyncStoarge';


export const getList = createAsyncThunk('viewlists', async (resbody) => {
//  console.log("fetch in redux",resbody);
  try{
  const res = await axiosInstance.get('entries');
  // console.log("data from reduxxx:",res)
  console.log("data from loginredux:",res.data)   
  return res.data.data;

} catch(error){
 console.log("data from reduxxx error:",error)
}

})

export const getListbyName = createAsyncThunk('viewlistbyname', async (resbody) => {
 console.log("fetch in redux",resbody);
  try{
  const res = await axiosInstance.post('getbyname',resbody);
  console.log("data from reduxxx: by name     ",res)
  console.log("data from loginredux:   by name     ",res.data.data)   
  return res.data.data;

} catch(error){
 console.log("data from reduxxx error:",error)
}

})