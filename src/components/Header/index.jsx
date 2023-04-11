import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = (props) => {
  const { isAuth, login } = props
  return (
    <header className={classes.header}>
      <img alt='headerImg' src="https://www.shutterstock.com/image-vector/free-logo-simple-illustration-vector-260nw-776460778.jpg" />
      <div className={classes.loginBlock}>
        {isAuth ? login : (<NavLink to={'/login'}>Login</NavLink>)}
      </div>
    </header>
  )
}
