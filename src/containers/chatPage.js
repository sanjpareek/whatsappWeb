import ChatPage from "./../components/chatPage";
import {sendMessage} from "./../actions/contactsList";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    	contactsList: state.contactsList
    };
}

function mapDispatchToProps(dispatch) {
  return {
    	sendMessage : () => {dispatch(sendMessage())}
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(ChatPage);
