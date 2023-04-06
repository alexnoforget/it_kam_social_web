import { connect } from 'react-redux'

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'

// export const DialogsContainer1 = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState().dialogsPage
//         const sendMessageClick = () =>
//           store.dispatch(sendMessageCreator())
//         const newMessageChange = (text) => store.dispatch(updateNewMessageBodyCreator(text))

//         return (
//           <Dialogs
//             sendMessageClick={sendMessageClick}
//             newMessageChange={newMessageChange}
//             dialogs={state.dialogs}
//             messages={state.messages}
//             value={state.newMessageBody}
//           />
//         )
//       }}

//     </StoreContext.Consumer>)
// }

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    value: state.dialogsPage.newMessageBody,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newMessageChange: (text) => { dispatch(updateNewMessageBodyCreator(text)) },
    sendMessageClick: () => { dispatch(sendMessageCreator()) },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)