import Conversation from './../components/conversation/conversation.js'
import React from "react"

export function openChat(contactName){
  return (<Conversation name={contactName}/>)
}
