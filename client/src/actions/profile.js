
/*
import axios from 'axios';
import {setAlert} from './alert';

import{
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

*/
import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  //GET_PROFILES,
  PROFILE_ERROR,
  //UPDATE_PROFILE,
  //CLEAR_PROFILE,
  //ACCOUNT_DELETED,
  //GET_REPOS,
  //NO_REPOS
} from './types';


export const getCurrentProfile = () => async (dispatch) => {
    try {
      const res = await axios.get('api/profile/me');
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
/*
//Get Current users profile
export const getCurrentProfile=()=>async dispatch=>{
    try {
        const res=await axios.get('api/profile/me');
        dispatch(
         {
             type:GET_PROFILE,
             payload:res.data
         });
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
    }
};

import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  //GET_PROFILES,
  PROFILE_ERROR,
  //UPDATE_PROFILE,
  //CLEAR_PROFILE,
  //ACCOUNT_DELETED,
  //GET_REPOS,
  //NO_REPOS
} from './types';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
*/