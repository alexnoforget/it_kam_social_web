import React, { useRef } from 'react'

import { Post } from './Post'

import classes from './MyPosts.module.css'

export const MyPosts = ({
  posts,
  newPostText,
  postChange,
  addPost }) => {
  const inputRef = useRef(null)
  const onChange = () => postChange(inputRef.current.value)
  const onClick = () => addPost(inputRef.current.value)

  return (
    <div className={classes.postsBlock}>
      <h3>Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChange}
            value={newPostText}
            ref={inputRef}
          />
        </div>
        <div>
          <button onClick={onClick}>
            Add Post
          </button>
        </div>
      </div>
      <div className={classes.posts}>
        {posts.map((item) =>
          <Post
            key={item.id}
            message={item.message}
            likesCount={item.likesCount}
          />
        )}
      </div>
    </div>
  )
}
