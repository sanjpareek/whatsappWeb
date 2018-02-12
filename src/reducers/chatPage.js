import * as actionType from  "./../constants/actions"

export default (state={},action) => {
  switch (action.type) {
    case actionType.RECEIVED:
    return{
      ...state,
      receivedText : action.receivedText,
      messageReceived : true
    }

    case actionType.STATUS:
    return{
      ...state,
      status : action.status
    }
    case actionType.SENT:
    return{
      ...state,
      messageSent : true,
      sentText : action.sentText
    }
    default:
      return{
        ...state
      }

  }
}
