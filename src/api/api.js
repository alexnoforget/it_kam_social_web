import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
})

const getUser = (params, signal = null) => {

  return instance.get(`users?${params}`, { signal })
}

const getMe = (signal) => {
  return instance.get('auth/me', { signal })
}

const getProfile = (profileId, signal) => {
  return instance.get(`profile/${profileId}`, { signal })
}

export { getMe, getUser, getProfile }