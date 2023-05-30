import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../api/api';

import { setUserProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'

const ProfileApiContainer = (props) => {
  const { setUserProfile, profile } = props

  const { profileId } = useParams()
  // console.log('profile', profile)

  useEffect(() => {
    if (!profileId) return
    const controller = new AbortController();

    getProfile(profileId, controller.signal)
      .then(({ data }) => setUserProfile(data)
      )

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Profile {...props} profile={profile} />
  )
}


const mapSateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const acsObject = {
  setUserProfile
}

export const ProfileContainer = connect(mapSateToProps, acsObject)(ProfileApiContainer) 