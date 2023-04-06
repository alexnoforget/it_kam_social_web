import { connect } from 'react-redux'
import { Sidebar } from './Sidebar'

const mapSateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const SidebarContainer = connect(mapSateToProps, mapDispatchToProps)(Sidebar)