import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}
/**
 * Since redux will do a shallow comparision between old stade and new stade,
 * if we just modify the old state and return it,
 * literally it's still the same object. So redux,
 * also react won't realize tha change of the state.
 * That's why we must return a brand new state object over modifying it.
 */
const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm}) //  Overwrite the searchTerm - the way we change/set the state
  return newState
}

const addOMDBData = (state, action) => {
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => { // Every action must have a type. It's will determine where you are going to route.
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
