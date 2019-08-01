class ChatBox {

  constructor(event, messageCallBack){
    console.log(messageCallBack)
    console.log(event.target)
    this.messageCallBack = messageCallBack
    this.chatBox = document.querySelector("#chat-box")
    this.chat_id = event.target.dataset.id 
    this.chat_name = event.target.innerText
    if (localStorage.userId) {
      console.log(localStorage.userId)
      this.user_id = localStorage.userId 
      this.user_name = localStorage.username
      // debugger
    }
    console.log(this.chat_id)
    console.log(this.chat_name)
    // debugger
  }

  isLoggedIn() {
    if (this.user_id) {
      console.log(this.user_id)
      return true 
    }
    else {
      return false
    }
  }

  renderChatBox() {
    if (this.isLoggedIn()) {
    this.chatBox.innerHTML = `<textarea id="messageText" class="text" cols="86" rows ="20" name="messageText" form="sendMessageForm"></textarea>
      <form id="sendMessageForm" name="sendMessageForm" method="post">
        <input type="submit" value="Send" class="sendButton">
      </form>`
    }
    this.form = document.querySelector("#sendMessageForm")
    this.chatBox.addEventListener("submit", this.messageSent.bind(this))
  }

  messageSent(event){
    event.preventDefault()
    const messageData = this.getMessageData()
    this.form.reset()
    console.log(messageData)
    // console.log(ChatAdapter.postMessageFetch(messageData))
    ChatAdapter.postMessageFetch(messageData)
    .then(json => this.messageCallBack(json))
      // .then()
  }
  
  getMessageData(){
    // debugger
    return {
      text: this.form[0].value,
      user_id: this.user_id,
      chat_id: this.chat_id
    }
  }

  // renderNewMessage(messageData) {
  //   console.log(messageData)
  //   debugger
  //   let newMessage = new Message(messageData)
  //   console.log(newMessage)
  //   // debugger
  // }

  // getValue(){
  //   return this.form[0].value
  // }

}