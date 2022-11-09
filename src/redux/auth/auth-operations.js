import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = ''

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }, unset() {
    axios.defaults.headers.common.Authorization = ''
  }
}

// 'auth/register' - будет делать тройку действий на запрос , credentials - будет объект со name, password, email
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials) // регистрация пользователя
    token.set(data.token)
    return data
  } catch (error) {
    
  }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials)
        token.set(data.token)
    return data
  } catch (error) {
    
  }
})

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout')
    token.unset()
  } catch (error) {
    
  }
})



