import { connect } from 'react-redux'

import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'

import { MyPosts } from './MyPosts'

// export const MyPostsContainer1 = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState().profilePage
//         const addPost = (text) => {
//           if (!text.trim().length) return
//           store.dispatch(addPostActionCreator())
//         }
//         const postChange = (text) => {
//           store.dispatch(updateNewPostTextCreator(text))
//         }

//         return (<MyPosts
//           postChange={postChange}
//           addPost={addPost}
//           posts={state.posts}
//           newPostText={state.newPostText}
//         />)
//       }}
//     </StoreContext.Consumer>)
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      if (!text.trim().length) return
      dispatch(addPostActionCreator())
    },
    postChange: (text) => dispatch(updateNewPostTextCreator(text)),
  }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
