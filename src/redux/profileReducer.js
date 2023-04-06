const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  posts: [
    { id: 1, message: '123132', likesCount: 12 },
    { id: 2, message: '2', likesCount: 2 },
    { id: 3, message: 'asdasdasd', likesCount: 11 },
  ],
  newPostText: 'Test',
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
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload: text })