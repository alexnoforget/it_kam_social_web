import { useEffect } from "react";
import { connect } from "react-redux";
import { Header } from ".";
import { getMe } from "../../api/api";
import { setAuthUserData } from "../../redux/authReducer"

export const HeaderApiContainer = (props) => {
  const { setAuthUserData } = props

  useEffect(() => {
    const controller = new AbortController()

    getMe(controller.signal).then(({ data }) => {
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