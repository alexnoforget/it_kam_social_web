import React from 'react'
import { Preloader } from '../../Users/Preloader'

import classes from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
  const { profile } = props

  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img alt='beach' src='https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*' />
      </div>
      <div className={classes.description_block}>
        <img alt='ava' src={profile.photos?.large} />
        ava + description
      </div>
    </div>
  )
}
