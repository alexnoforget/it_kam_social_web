import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import classes from './Users.module.css'

export const User = (props) => {

  const { user, handleFollowClick } = props

  return (
    <div >
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={classes.userPhoto}
              alt=''
              src={user.photos.small || userPhoto} />
          </NavLink>

        </div>
        <div>
          <button onClick={handleFollowClick(user.id)}
          >
            {user.followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </span>
      <span>
        <span>
          <div>{user?.name}</div>
          <div>{user?.status}</div>
        </span>
        <span>
          <div>{user.location?.country || "TEST_MOSCOW"}</div>
          <div>{user.location?.city}</div>
        </span>
      </span>
    </div>
  )
}
