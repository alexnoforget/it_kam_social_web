import React from 'react'

import { NavLink } from 'react-router-dom'

import classes from './DialogItem.module.css'

export const DialogItem = (props) => {
  const { name, id } = props

  return (
    <div className={classes.item}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>)
}