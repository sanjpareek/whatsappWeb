import ChatPage from "./../components/chatPage";
import {sendMessage} from "./../actions/chatPage";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    	ChatPage: state.ChatPage
    };
}

function mapDispatchToProps(dispatch) {
  return {
    	sendMessage : (contactName, message) => {dispatch(sendMessage(contactName, message))}
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(ChatPage);
