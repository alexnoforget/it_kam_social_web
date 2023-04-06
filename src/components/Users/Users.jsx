import React from 'react'
import classes from './Users.module.css'
import { User } from './User'

export const Users = (props) => {

  const {
    pages,
    setPage,
    currentPage,
    users,
    handleFollowClick,
  } = props

  return (
    <div>
      <div className={classes.pagesContainer}>
        {pages.map((pageNumber, i) => {
          return (
            <span
              onClick={setPage(pageNumber)}
              key={i}
              className={currentPage === pageNumber ? classes.selectedPage : ''}>
              {pageNumber}
            </span>
          )
        })}
      </div>
      {users.map((user) =>
        <User key={user.id} handleFollowClick={handleFollowClick} user={user} />
      )}
    </div>
  )
}
