import React, {Component} from "react"

export default class SearchBar extends Component{
  render(){
    return(
      <div className="row searchBox">
         <div className="col-sm-12 searchBox-inner">
           <div className="form-group has-feedback">
             <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search">
             </input>
             <span className="glyphicon glyphicon-search form-control-feedback"></span>
           </div>
         </div>
       </div>
    )
  }
}
