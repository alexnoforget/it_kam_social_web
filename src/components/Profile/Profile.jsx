import React from 'react'
import { MyPostsContainer } from './MyPosts'

import { ProfileInfo } from './ProfileInfo'

export const Profile = (props) => {
  const { profile } = props

  return (
    <section>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </section>
  )
}
