import React, {Component} from "react"

import Header from './contacts/header.js'
import SearchBar from './contacts/searchBar.js'
import ContactsList from './contacts/contactsList.js'

export default class ChatPage extends Component{
  render(){
    return(
      <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
                <Header/>
                <SearchBar/>
                <ContactsList/>
              </div>
              </div>
              </div>
    )
  }
}
