import React, {Component} from "react"

export default class SearchBar extends Component{

  filterList = (event) => {
    var updatedList = this.props.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.props.updateContactList(updatedList);
  }

  render(){
    return(
      <div className="row searchBox">
         <div className="col-sm-12 searchBox-inner">
           <div className="form-group has-feedback">
             <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search"
               onChange={this.filterList}>
             </input>
             <span className="glyphicon glyphicon-search form-control-feedback"></span>
           </div>
         </div>
       </div>
    )
  }
}
