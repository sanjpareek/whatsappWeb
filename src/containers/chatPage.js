import ChatPage from "./../components/chatPage";
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    	ChatPage: state.ChatPage
    };
}


export default connect( mapStateToProps)(ChatPage);
