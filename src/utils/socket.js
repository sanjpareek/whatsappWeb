export default class Socket {
  constructor(contactName){
    this.contactName = contactName
    this.wsUri = "ws://echo.websocket.org/";
    this.websocket = new WebSocket(this.wsUri);
    this.status = "";
  }

    _onOpen(evt)
  {
    this.status = "CONNECTED";
  }

   _onClose(evt)
  {
    this.status = "DISCONNECTED";
  }

  _onMessage(evt)
  {
    this.msgReceived = evt.data;
    this.status = "RECEIVED";
    // websocket.close();
  }

  _onError(evt)
  {
    this.status= "ERROR";
  }

  _onSend(message)
  {
    this.status ="SENT";
  }

  _doSend(message){
    this.websocket.send(message);
  }

  initializeHandlers(){
    this.websocket.onopen = (evt) => { this._onOpen(evt) };
    this.websocket.onclose = (evt) => { this._onClose(evt) };
    this.websocket.onmessage = (evt) => { this._onMessage(evt) };
    this.websocket.onerror = (evt) =>  { this._onError(evt) };
    this.websocket.onsend = (evt) =>  {this._onSend(evt)}
  }

}
