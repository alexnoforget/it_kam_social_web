import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { sidebarReducer } from "./sidebarReducer"

export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: '123132', likesCount: 12 },
        { id: 2, message: '2', likesCount: 2 },
        { id: 3, message: 'asdasdasd', likesCount: 11 },
      ],
      newPostText: 'Test',
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "What's up" },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
      ],
      dialogs: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
        { id: 6, name: 'User 6' },
      ],
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Fedor' },
        { id: 3, name: 'Petya' },
        { id: 4, name: 'Pasha' },
      ],
    }
  },
  _callSubscriber() { },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) { //{type: 'SOMETHING', payload: {},}
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },
}
