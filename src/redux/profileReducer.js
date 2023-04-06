const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    { id: 1, message: '123132', likesCount: 12 },
    { id: 2, message: '2', likesCount: 2 },
    { id: 3, message: 'asdasdasd', likesCount: 11 },
  ],
  newPostText: 'Test',
  profile: null,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts,
        {
          id: new Date().toISOString(),
          message: state.newPostText,
          likesCount: 0,
        }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile })
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload: text })