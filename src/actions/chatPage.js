import {WS_URI, status} from "./../constants/componentConstants"
import * as actionType from  "./../constants/actions"

export function sendMessage(contactName, message){
    let websocket = new WebSocket(WS_URI);
    return(dispatch, getState) => {
      websocket.onopen = (evt) => {
         dispatch(_onOpen(evt,message));
         websocket.send(message);
         dispatch(_onSend(evt,message,contactName));
        };
      websocket.onclose = (evt) => { dispatch(_onClose(evt)) };
      websocket.onmessage = (evt) => { dispatch(_onMessage(evt,contactName)) };
      websocket.onerror = (evt) =>  { dispatch(_onError(evt)) };
    }
}

function _onOpen(evt){
  return({
    type : actionType.STATUS,
    status : status.CONNECTED
  })
}

function _onClose(evt){
  return({
    type : actionType.STATUS,
    status : status.DISCONNECTED
  })
}

function _onMessage(evt,contactName){
  return({
    contactName : contactName,
    type : actionType.RECEIVED,
    receivedText : evt.data
  })
}

function _onError(evt){
  return({
    type : actionType.STATUS,
    status : status.ERROR
  })
}

function _onSend(evt,sentText,contactName){
  return({
    contactName : contactName,
    type : actionType.SENT,
    sentText : sentText
  })
}
