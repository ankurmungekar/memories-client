import { types } from "./actions";

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_ALL:
      return action.payload
    case types.CREATE_POST:
      return [...state, action.payload]
    case types.UPDATE_POST:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case types.DELETE_POST:
      return state.filter((post) => (post._id !== action.payload));
    case types.LIKE_POST:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return state
  }
}