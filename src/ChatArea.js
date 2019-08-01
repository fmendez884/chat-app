class ChatArea {

  constructor(event) {
    const messageList = new MessageList(event)
    this.chatBox = new ChatBox(event, messageList.renderOneMessage)
    this.chatBox.renderChatBox()
  }

}