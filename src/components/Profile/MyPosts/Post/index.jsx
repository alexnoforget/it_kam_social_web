import React from 'react'

import classes from './Post.module.css'

export const Post = (props) => {
  const { message, likesCount } = props
  return (
    <div className={classes.item}>
      <img alt='headerImg' src="https://www.shutterstock.com/image-vector/free-logo-simple-illustration-vector-260nw-776460778.jpg" />
      {message}
      <div>
        <span>like</span>
        {likesCount}
      </div>
    </div>
  )
}
