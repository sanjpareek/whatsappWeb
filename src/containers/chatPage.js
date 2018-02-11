import ChatPage from "./../components/chatPage";
import {openChat} from "./../actions/contactsList";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    	contactsList: state.contactsList
    };
}

function mapDispatchToProps(dispatch) {
  return {
    	actions: bindActionCreators(openChat, dispatch)
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(ChatPage);
