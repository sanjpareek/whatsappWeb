import React, {Component} from "react"

import NewTextArea from './newTextArea.js'
import Header from './header.js'
import OldMessage from './oldMessage'
import Message from './message'


export default class Conversation extends Component{
  render(){
    const{message, name, sendMessage,isMessageSent,isMessageReceived, sentText, receivedText}=this.props;
    return(
      <div>
        <Header name={name}/>
       <div className="row message">
          <OldMessage/>
          {isMessageSent && <Message type='receiver' message={sentText}/>}
          {isMessageReceived && <Message type="sender" message={receivedText}/>}
       </div>
         <NewTextArea sendMessage={sendMessage} contactName={name}/>
       </div>
    )
  }
}
