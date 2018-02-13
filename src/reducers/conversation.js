import * as actionType from  "./../constants/actions"

export default (state={},action) => {
  let newState;
  switch (action.type) {
    case actionType.RECEIVED:
      newState = {...state[action.contactName]};
      if(!newState.receivedText){
        newState.receivedText=[];
      }
      newState.receivedText.push(action.receivedText);
      newState.messageReceived = true;
      return{
        ...state,
        [action.contactName] : newState
      }

    case actionType.SENT:
      newState = {...state[action.contactName]};
      if(!newState.sentText){
        newState.sentText=[];
      }
      newState.sentText.push(action.sentText);
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
