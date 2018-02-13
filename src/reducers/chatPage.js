import * as actionType from  "./../constants/actions"
import {names} from './../utils/contacts.js'

export default (state={names:names},action) => {
  switch (action.type) {
    case actionType.STATUS:
    return{
      ...state,
      status : action.status
    }
    default:
      return{
        ...state
      }

  }
}
