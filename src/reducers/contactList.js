export const OPEN_CHAT = 'OPEN_CHAT'

export default (state={},action) => {
  switch (action.type) {
    case OPEN_CHAT:
    return{
      ...state,
      selectedName : action.name
    }
    default:
      return{
        ...state
      }

  }
}
