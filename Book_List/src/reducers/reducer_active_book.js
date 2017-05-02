import { BOOK_SELECTED } from '../actions/actions'
// State arguments is not application state, only the state
// this reducer is responsible for.
export default function (state = null, action) {
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload // redux doesn't allow reducer to return undefined -error
  }
  return state // the case we don't care about the action
}