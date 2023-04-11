import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Header } from ".";
import { setAuthUserData } from "../../redux/authReducer"

export const HeaderApiContainer = (props) => {
  const { setAuthUserData } = props

  useEffect(() => {
    const controller = new AbortController();

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {
        signal: controller.signal,
        withCredentials: true,
      })
      .then(({ data }) => {
        const { id, email, login } = data.data

        if (data.resultCode === 0) {
          setAuthUserData(id, email, login)
        }
      }
      )

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Header {...props} />
  )
}


const mapSateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

const acsObject = {
  setAuthUserData
}

export const HeaderContainer = connect(mapSateToProps, acsObject)(HeaderApiContainer) 