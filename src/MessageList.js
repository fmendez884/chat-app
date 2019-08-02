class MessageList {

  // App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  //   received: function(data) {
  //     $("#messages").removeClass('hidden')
  //     return $('#messages').append(this.renderMessage(data));
  //   },
  
  //   renderMessage: function(data) {
  //     return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
  //   }
  // });
  
  constructor(event){
    this.messageList = document.querySelector("#message-list")
    console.log("this outside the constructor", this)
    // this.messages = ChatApp.cable.subscriptions.create('MessagesChannel',
      // this.renderAllMessages(event) 
      setInterval(() => {
        this.messageList.innerHTML = ""
        ChatAdapter.fetchChatPage(this.chatId)
        .then((json) => this.renderAllMessages(json))
      }, 3000);

    console.log(event.target.dataset.id)
    this.chatId = event.target.dataset.id

    ChatAdapter.fetchChatPage(this.chatId)
      .then(this.renderAllMessages.bind(this))
      // debugger
  }

    renderAllMessages(chat) {
      console.log(chat)
      console.log(chat.messages)
      console.log(chat.name)
      // debugger
      console.log("poll")
      
      this.chatList = document.querySelector("#chat-list")
      this.chatList.style.display = "none";
      this.chatTitle = document.querySelector("#chat-title")
      this.chatTitle.innerText = chat.name
      this.chatTitle.dataset.id = chat.id

      this.chatTitle.addEventListener("click", function(event){
        location.reload()
      })
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