import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export async function createNewUser(user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup', user)
  return data
}
export const registration = createAsyncThunk('auth/registration', async (data, thunkAPI) => {
  try {
    const response = await createNewUser(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function loginUser (user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/login', user)
  return data
}
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await loginUser(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function logoutUser (user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/logout', user)
  return data
}
export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  try {
    const response = await logoutUser(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

