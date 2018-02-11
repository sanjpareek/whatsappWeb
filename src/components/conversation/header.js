import React, {Component} from "react"

export default class Header extends Component{
  render(){
    const{name} = this.props
    return(
      <div className="row heading">
        <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div className="heading-avatar-icon">
            <img alt="jam" src="http://shurl.esy.es/y"></img>
          </div>
        </div>
        <div className="col-sm-8 col-xs-7 heading-name">
          <a className="heading-name-meta">{name}</a>
          <span className="heading-online">Online</span>
        </div>
        <div className="col-sm-1 col-xs-1  heading-dot pull-right">
          <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
