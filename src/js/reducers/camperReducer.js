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
  }

  return state
}
