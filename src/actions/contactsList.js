import Conversation from './../components/conversation/conversation.js'
import React from "react"
import Socket from "./../utils/socket"

export function sendMessage(contactName, message){
  const websocket = new Socket(contactName);
  let receivedMsg;
  websocket.initializeHandlers();
  if(websocket.status === "CONNECTED"){
    websocket.doSend(message);
  }
  if(websocket.status === "CONNECTED"){
    receivedMsg = websocket.msgReceived;
  }
  return({
      type : "MSG_RECEIVED",
      receivedMsg
  })
}
