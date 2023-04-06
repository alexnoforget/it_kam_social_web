import { connect } from 'react-redux'
import { toggleFollow, setCurrentPage, setIsFetching, setUsers } from '../../redux/usersReducer'
import { UsersApiController } from './UsersApiController'

const mapSateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

const acsObject = {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setIsFetching,
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (id) => dispatch(followAC(id)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//     setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching)),
//   }
// }

export const UsersContainer = connect(mapSateToProps, acsObject)(UsersApiController) 