import React, {Component} from "react"

export default class NewTextArea extends Component{
  constructor(props){
    super(props);
    this.state ={
      msg : ""
    }
  }

  setMessage(e){
    if(e.target.value){
      this.setState({msg:e.target.value})
    }
  }

  sendMessage(){
    this.props.sendMessage(this.props.contactName, this.state.msg);
    let text = this.refs.text;
    text.value = "";
  }
  render(){
    const{sendMessage, contactName}=this.props;
    return(
       <div className="row reply">
         <div className="col-sm-1 col-xs-1 reply-emojis">
           <i className="fa fa-smile-o fa-2x"></i>
         </div>
         <div className="col-sm-9 col-xs-9 reply-main">
           <textarea className="form-control" rows="1" onChange={this.setMessage.bind(this)} ref="text"></textarea>
         </div>
         <div className="col-sm-1 col-xs-1 reply-recording">
           <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
         </div>
         <div className="col-sm-1 col-xs-1 reply-send" onClick={()=>this.sendMessage()}>
           <i className="fa fa-send fa-2x" aria-hidden="true"></i>
         </div>
       </div>
    )
  }
}
