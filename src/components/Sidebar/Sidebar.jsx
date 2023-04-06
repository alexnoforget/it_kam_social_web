import React from 'react'

import classes from './Sidebar.module.css'

export const Sidebar = ({ friends }) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarTitle}>
        Friends
      </div>
      <ul className={classes.sidebarList}>
        {friends.map((item) =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
