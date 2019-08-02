class ChatList {
  
  constructor() {
    this.chatList = document.querySelector("#chat-list")
    this.chatListDiv = document.querySelector("#chat-list-div")
    this.createDiv = document.querySelector("#create-div")

    ChatAdapter.fetchAllChats()
    .then(this.renderAllChats.bind(this))
    
  }
  
  renderAllChats(chats) {
    chats.forEach(this.renderOneChat)
    this.appendButton()
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

  
  appendButton() {
    this.createButton = document.createElement("button")
    this.createButton.innerText = "Create a ChatRoom"
    this.createButton.className = "new-chat-button"
    this.createDiv.appendChild(this.createButton)
    
    this.createButton.addEventListener("click", (event) => {
      event.preventDefault()
      // console.log(event.target)
      // debugger
      this.renderForm(event)
    })
  }
  
  renderForm(event) {
    console.log(event.target)
    let newChatButton = document.querySelector(".new-chat-button")
    let newChatForm = document.createElement("div")
    this.createDiv.innerHTML = `<form id="newChatForm" name="newChatForm" method="post">
    <input type="newChat" value="" class="newChatInput" style="width: 100%">
    <input type="submit" value="New Chat Room!" class="submitButton">
    </form>`
    // this.createDiv.append(newChatForm)
    let chatForm = document.querySelector("#newChatForm")
    chatForm.addEventListener("submit", (event) => {
      event.preventDefault()

      console.log("submit button")
      console.log(event.target)
      console.log(event.target[0].value)
      ChatAdapter.newChatFetch(event.target[0].value)
      .then(json => this.renderOneChat)
      location.reload()
    })

  }
  
  
  //  renderNewChatForm(event) {
  //   event.preventDefault() 
  //   console.log(event) 
  //   console.log(event.target)
  //   debugger
  // }

}

