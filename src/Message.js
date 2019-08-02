class Message {

  constructor(messageData) {
    this.user_id = messageData.user_id
    this.chat_id = messageData.chat_id
    this.message_text = messageData.text
    this.user_name = messageData.user.name
    this.updated_at = messageData.updated_at
    this.message_list = document.querySelector("#message-list")
    console.log(messageData)
    // debugger
  }
    
  render() {
      // this.messageUl = document.querySelector("")
      // renderChatBox()
      // let textArea = document.querySelector("textarea")
      // textArea.value = ""
      this.messageLi = document.createElement("li")
      this.messageLi.innerText = `${this.user_name}(${this.updated_at}): ${this.message_text}`
      console.log(this.messageLi)
      // debugger
      // this.message_list.append(this.messageLi)
      return this.messageLi
      // debugger
  }

}