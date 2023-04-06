import React from 'react'

import { NavLink } from "react-router-dom";
import { SidebarContainer } from '../Sidebar';

import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to='profile'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='dialogs'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='news'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >News</NavLink>
      </div>
      <div className={classes.item} >
        <NavLink
          to='music'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='users'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >Find Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='settings'
          className={({ isActive }) => isActive ? classes.active : undefined}
        >Settings</NavLink>
      </div>
      <SidebarContainer />
    </nav >
  )
}
