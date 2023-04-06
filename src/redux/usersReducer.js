const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 17,
  currentPage: 1,
  isFetching: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.payload
            ? { ...user, followed: !user.followed }
            : { ...user }
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }
    default:
      return state
  }
}

export const toggleFollow = (id) => ({ payload: id, type: FOLLOW })
export const setUsers = (users) => ({ payload: users, type: SET_USERS })
export const setCurrentPage = (pageNumber) => ({ payload: pageNumber, type: SET_CURRENT_PAGE })
export const setIsFetching = (isFetching) => ({ payload: isFetching, type: TOGGLE_IS_FETCHING })
