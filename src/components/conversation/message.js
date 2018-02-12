import React, {Component} from "react"

export default class Message extends Component{
  render(){
    if(this.props.message){
      const{type,message}=this.props;
      const classMain = type==="sender"? "message-main-sender" : "message-main-receiver";
      return(
        <div className="message-body">
          <div className={"col-xs-12 " + classMain}>
            <div className={type}>
              <div className="message-text">
                {message}
              </div>
              <span className="message-time pull-right">
                Sun
              </span>
            </div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
