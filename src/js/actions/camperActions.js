import axios from 'axios'

export const fetchRequest = () => ({ type: 'FETCH_REQUEST' })
export const fetchSuccess = (users) => ({ type: 'FETCH_SUCCESS', payload: { users } })
export const fetchFail = () => ({ type: 'FETCH_FAIL' })

export const sortCampersAsc = (users) => ({ type: 'SORT_ASC', payload: { users } })
export const sortCampersDes = (users) => ({ type: 'SORT_DES', payload: { users } })

export function fetch() {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
         .then((response) => {
           dispatch(fetchSuccess(response.data))
         })
         .catch((error) => {
           dispatch(fetchFail())
         })
  }
}

export function sortAsc(users) {
  return (dispatch) => {
    dispatch(sortCampersAsc(users))
  }
}

export function sortDes(users) {
  return (dispatch) => {
    dispatch(sortCampersDes(users))
  }
}
