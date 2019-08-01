class MessageList {
  
  constructor(event){
    this.messageList = document.querySelector("#message-list")
    console.log(event.target)
    ChatAdapter.fetchChatPage(event)
      .then(this.renderAllMessages.bind(this))
  }

    renderAllMessages(chat) {
      // console.log(chat.messages)
      // console.log(chat.name)

      this.chatList = document.querySelector("#chat-list")
      this.chatList.style.display = "none";
      this.chatTitle = document.querySelector("#chat-title")
      this.chatTitle.innerText = chat.name
      this.chatTitle.dataset.id = chat.id

      chat.messages.forEach(this.renderOneMessage)
      // mainDiv.append(chatBox)
      // let textArea = document.querySelector("#messageText")
      // let messageForm = document.querySelector("#sendMessageForm")

    // chatUl.style.display = "none";
    // let chatTitle = document.querySelector("#chat-title")
    // chatTitle.innerText = chat.name
    // chatTitle.className = "chat-title"
    // chatTitle.dataset.id = chat.id
    // // chatUl.parentNode.replaceChild(chatTitle, chatUl);
  
    // chat.messages.forEach(renderOneMessage)
    // mainDiv.append(chatBox)
    // let textArea = document.querySelector("#messageText")
    // let messageForm = document.querySelector("#sendMessageForm")
  
    // messageForm.addEventListener("submit", function(event){
    //   event.preventDefault()
    //   messageFormEvent(event)
    // })
  }

  renderOneMessage = (messageData) => {
    const messageComponent = new Message(messageData)
    this.messageList.append(messageComponent.render())
  }

  // slapQuotesOnTheDOM(quotes) {

  //   // const domNodes = quotes.map(quoteData => new Quote(quoteData))
  //   //       .map(quoteInstance => quoteInstance.render())

  //   // this.quoteList.append(...domNodes)
  //   quotes.forEach(this.slapOneQuoteOnTheDOM)
  // }

  // slapOneQuoteOnTheDOM = (quoteData) => {
  //   const quoteComponent = new Quote(quoteData)
  //   this.quoteList.append(quoteComponent.render())
  // }

}