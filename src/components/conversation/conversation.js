import React, {Component} from "react"

import NewTextArea from './newTextArea.js'
import Header from './header.js'
import OldMessage from './oldMessage'
import Message from './message'


export default class Conversation extends Component{
  render(){
    const{sendMessage,name}=this.props;
    let sent=null, received=null;
    if(this.props.Conversation[name]){
        const{messageSent,messageReceived, sentText, receivedText}=this.props.Conversation[name];
        sent = (messageSent && <Message type='receiver' message={sentText}/>)
        received = (messageReceived && <Message type="sender" message={receivedText}/>)
    }
    return(
      <div>
        <Header name={name}/>
       <div className="message">
          <OldMessage/>
          {sent}
          {received}
       </div>
         <NewTextArea sendMessage={sendMessage} contactName={name}/>
       </div>
    )
  }
}
