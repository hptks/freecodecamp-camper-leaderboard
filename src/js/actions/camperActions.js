import axios from 'axios'

export const fetchRequest = () => ({ type: 'FETCH_REQUEST' })
export const fetchSuccess = (users) => ({ type: 'FETCH_SUCCESS', payload: { users } })
export const fetchFail = () => ({ type: 'FETCH_FAIL' })

export function fetch() => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
         .then((response) => {
           console.log(response.data)
         })
         .catch((error) => {
           dispatch(fetchFail())
         })
  }
}
