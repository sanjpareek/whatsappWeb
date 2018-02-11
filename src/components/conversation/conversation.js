import React, {Component} from "react"

import NewTextArea from './newTextArea.js'
import Header from './header.js'

export default class Conversation extends Component{
  render(){
    const{message}=this.props;
    return(
      <div>
        <Header/>
       <div class="row message" id="conversation">
          <OldMessage/>
          <Message type='receiver' message={message}/>
          <Message type="sender" message={message}/>
       </div>
         <NewTextArea/>
       </div>
    )
  }
}
