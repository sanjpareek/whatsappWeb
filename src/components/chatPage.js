import React, {Component} from "react"

import Header from './contacts/header.js'
import SearchBar from './contacts/searchBar.js'
import ContactsList from './contacts/contactsList.js'
import Conversation from './conversation/conversation.js'

export default class ChatPage extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedName : "",
      contactRows : []
    }
  }

  openChat = (name) => {
    if(this.state.name !== name){
      this.setState({selectedName : name})
    }
  }

  updateContactList = (list) => {
    var contactRows=[];
    for (var i = 0; i < list.length; i++) {
        contactRows.push(<ContactsList key={i} name={list[i]} openChat={this.openChat} />);
    }
    this.setState({contactRows : contactRows})
  }

  componentWillMount(){
    this.updateContactList(this.props.ChatPage.names);
  }
  render(){
      const{selectedName, sentText, receivedText, messageSent, messageReceived,names}=this.props.ChatPage;

    return(
      <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
                <Header/>
                <SearchBar initialItems={names} updateContactList={this.updateContactList}/>
                {this.state.contactRows}
              </div>
               <div className="col-sm-8 conversation">
                  {this.state.selectedName && <Conversation name={this.state.selectedName} sendMessage={this.props.sendMessage}
                  isMessageSent={messageSent} sentText={sentText} receivedText={receivedText}
                  isMessageSent={messageSent} isMessageReceived={messageReceived}/>}
              </div>
            </div>
        </div>
    )
  }
}
