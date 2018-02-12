export const RECEIVED = 'MSG_RECEIVED'

export default (state={},action) => {
  switch (action.type) {
    case RECEIVED:
    return{
      ...state,
      msgReceived : action.msgReceived
    }

    default:
      return{
        ...state
      }

  }
}
