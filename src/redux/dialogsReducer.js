const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.payload }
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageBody: '',
        messages: [
          ...state.messages,
          {
            id: new Date().toISOString(),
            message: state.newMessageBody,
          }
        ]
      }
    default:
      return state
  }
}

export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, payload: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
