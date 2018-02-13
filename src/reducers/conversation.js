import * as actionType from  "./../constants/actions"

export default (state={},action) => {
  let newState;
  switch (action.type) {
    case actionType.RECEIVED:
      newState = {...state[action.contactName]};
      newState.receivedText = action.receivedText;
      newState.messageReceived = true;
      return{
        ...state,
        [action.contactName] : newState
      }

    case actionType.SENT:
      newState = {...state[action.contactName]};
      newState.sentText = action.sentText;
      newState.messageSent = true;
      return{
        ...state,
        [action.contactName] : newState
      }
    default:
      return{
        ...state
      }

  }
}
