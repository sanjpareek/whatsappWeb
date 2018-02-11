import React, {Component} from "react"

import NewTextArea from './newTextArea.js'
import Header from './header.js'
import OldMessage from './oldMessage'
import Message from './message'


export default class Conversation extends Component{
  render(){
    const{message, name}=this.props;
    return(
      <div>
        <Header name={name}/>
       <div className="row message">
          <OldMessage/>
          <Message type='receiver' message={message}/>
          <Message type="sender" message={message}/>
       </div>
         <NewTextArea/>
       </div>
    )
  }
}
