import React, { Component } from 'react';


export default class ContactsList extends Component {
  render() {
    const{name, openChat}=this.props;
    return (
    <span className="side-one" onClick={(e)=>{e.stopPropagation();openChat(name)}}>
           <span className="row sideBar">
              <span className="row sideBar-body">
                <span className="col-sm-3 col-xs-3 sideBar-avatar">
                  <span className="avatar-icon">
                    <img alt="sidebar" src="http://shurl.esy.es/y"></img>
                  </span>
                </span>
                <span className="col-sm-9 col-xs-9 sideBar-main">
                  <span className="row">
                    <span className="col-sm-8 col-xs-8 sideBar-name">
                      <span className="name-meta">{name}</span>
                    </span>
                    <span className="col-sm-4 col-xs-4 pull-right sideBar-time">
                      <span className="time-meta pull-right">18:18</span>
                    </span>
                  </span>
                </span>
        </span>
      </span>
  </span>
    );
  }
}
