class ChatList {
  
  constructor() {
    this.chatList = document.querySelector("#chat-list")
    
    ChatAdapter.fetchAllChats()
    .then(this.renderAllChats.bind(this))
  }
  
  renderAllChats(chats) {
    chats.forEach(this.renderOneChat)
  }
  
  renderOneChat = (chatData) => {
    // console.log(value)
    // console.log(index)
    // debugger
  
    const chatComponent = new Chat(chatData)
    this.chatList.append(chatComponent.render())
    
    // let chatLi = document.createElement("li")
    // chatLi.innerText = value.name
    // chatLi.dataset.id = value.id
    // chatUl.append(chatLi)
    // renderChatBox()
  }

}

