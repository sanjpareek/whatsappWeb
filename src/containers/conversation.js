import Conversation from "./../components/conversation/conversation";
import {sendMessage} from "./../actions/chatPage";
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    	Conversation: state.Conversation
    };
}

function mapDispatchToProps(dispatch) {
  return {
    	sendMessage : (contactName, message) => {dispatch(sendMessage(contactName, message))}
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(Conversation);
