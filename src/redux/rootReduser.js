import { combineReducers} from "@reduxjs/toolkit";
import filterReducer from './contacts/sliceFilter';
import contactsReducer from "./contacts/sliceContacts";
import authReducer from "./auth/auth-slice";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
})

