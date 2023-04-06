import React from 'react'
import { MyPostsContainer } from './MyPosts'

import { ProfileInfo } from './ProfileInfo'

export const Profile = () => {
  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  )
}
