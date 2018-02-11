import React, {Component} from "react"

import Header from './contacts/header.js'
import SearchBar from './contacts/searchBar.js'
import ContactsList from './contacts/contactsList.js'
import {fetchContactsList} from './../actions/contacts.js'
import Conversation from './conversation/conversation.js'

export default class ChatPage extends Component{
  constructor(props){
    super(props);
    this.state={
      contacts : [],
      selectedName : ""
    }
  }

  openChat = (name) => {
    if(this.state.name !== name){
      this.setState({selectedName : name})
    }
  }
  componentWillMount(){
      const names = fetchContactsList();
      this.setState({contacts : names});
  }

  render(){
      const{selectedName}=this.props;
      var contactRows=[];
      for (var i = 0; i < this.state.contacts.length; i++) {
          contactRows.push(<ContactsList key={i} name={this.state.contacts[i]} openChat={this.openChat} />);
      }
    return(
      <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
                <Header/>
                <SearchBar/>
                {contactRows}
              </div>
               <div className="col-sm-8 conversation">
                  {this.state.selectedName && <Conversation name={this.state.selectedName}/>}
              </div>
            </div>
        </div>
    )
  }
}
