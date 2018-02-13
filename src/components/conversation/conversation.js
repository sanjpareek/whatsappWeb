import React, {Component} from "react"

import NewTextArea from './newTextArea.js'
import Header from './header.js'
import OldMessage from './oldMessage'
import Message from './message'


export default class Conversation extends Component{
  render(){
    const{sendMessage,name}=this.props;
    let sent=null, received=null;
    let chats=[];
    if(this.props.Conversation[name]){
        const{messageSent,messageReceived, sentText, receivedText}=this.props.Conversation[name];
        for(var i=0;i<sentText.length;i++){
          sent = (messageSent && <Message type='receiver' message={sentText[i]}/>)
          received = (messageReceived && <Message type="sender" message={receivedText[i]}/>)
          chats.push(sent);
          chats.push(received);
         }
    }
    return(
      <div>
        <Header name={name}/>
       <div className="message">
          <OldMessage/>
          {chats}
       </div>
         <NewTextArea sendMessage={sendMessage} contactName={name}/>
       </div>
    )
  }
}
