import { combineReducers, legacy_createStore as createStore } from 'redux'
import { authReducer } from './authReducer'
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { sidebarReducer } from './sidebarReducer'
import { usersReducer } from './usersReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

export const store = createStore(reducers)