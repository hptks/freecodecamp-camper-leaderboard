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
      case 'SORT_ASC_REC': {
        let { users } = action.payload
        users.sort((x, y) => {
          return x.recent - y.recent
        })

        return Object.assign({}, state, { users })
      }
      case 'SORT_DES_REC': {
        let { users } = action.payload
        users.sort((x, y) => {
          return y.recent - x.recent
        })

        return Object.assign({}, state, { users })
      }
      case 'SORT_ASC_ALL': {
        let { users } = action.payload
        users.sort((x, y) => {
          return x.alltime - y.alltime
        })

        return Object.assign({}, state, { users })
      }
      case 'SORT_DES_ALL': {
        let { users } = action.payload
        users.sort((x, y) => {
          return y.alltime - x.alltime
        })

        return Object.assign({}, state, { users })
      }
  }

  return state
}
