import { combineReducers} from "@reduxjs/toolkit";
import filterReducer from './contacts/sliceFilter';
import contactsReducer from "./contacts/sliceContacts";
import authReducer from "./auth/auth-slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
})

