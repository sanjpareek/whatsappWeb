import { combineReducers } from 'redux'
import ChatPage from './../reducers/chatPage'
import Conversation from './../reducers/conversation'

export default combineReducers({
  ChatPage,
  Conversation
})
