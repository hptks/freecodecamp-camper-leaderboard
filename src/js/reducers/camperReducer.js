const initialState = {
  users: [],
  busy: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case 'FETCH_REQUEST': {
        return Object.assign({}, state, { busy: true })
      }
      case 'FETCH_SUCCESS': {
        const { users } = action.payload
        return Object.assign({}, state, { users, busy: false })
      }
      case 'FETCH_FAIL': {
        return initialState
      }
      case 'SORT_ASC': {
        let { users } = action.payload
        users.sort((x, y) => {
          return x.recent - y.recent
        })

        return Object.assign({}, state, { users })
      }
      case 'SORT_DES': {
        let { users } = action.payload
        users.sort((x, y) => {
          return y.recent - x.recent
        })

        return Object.assign({}, state, { users })
      }
  }

  return state
}
