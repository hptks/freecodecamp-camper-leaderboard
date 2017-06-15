import axios from 'axios'

export const fetchRequest = () => ({ type: 'FETCH_REQUEST' })
export const fetchSuccess = (users) => ({ type: 'FETCH_SUCCESS', payload: { users } })
export const fetchFail = () => ({ type: 'FETCH_FAIL' })

export const sortCampersAscRec = (users) => ({ type: 'SORT_ASC_REC', payload: { users } })
export const sortCampersDesRec = (users) => ({ type: 'SORT_DES_REC', payload: { users } })

export const sortCampersAscAll = (users) => ({ type: 'SORT_ASC_ALL', payload: { users } })
export const sortCampersDesAll = (users) => ({ type: 'SORT_DES_ALL', payload: { users } })

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

export function sortAscRec(users) {
  return (dispatch) => {
    dispatch(sortCampersAscRec(users))
  }
}

export function sortDesRec(users) {
  return (dispatch) => {
    dispatch(sortCampersDesRec(users))
  }
}

export function sortAscAll(users) {
  return (dispatch) => {
    dispatch(sortCampersAscAll(users))
  }
}

export function sortDesAll(users) {
  return (dispatch) => {
    dispatch(sortCampersDesAll(users))
  }
}
