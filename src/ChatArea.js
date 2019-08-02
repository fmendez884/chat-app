class ChatArea {

  constructor(event) {
    const messageList = new MessageList(event)
    this.chatBox = new ChatBox(event, messageList.renderOneMessage)
    this.chatBox.renderChatBox()
    this.createDiv = document.querySelector("#create-div")
    this.createDiv.style.display = "none";
    
    this.fetchChatUsers(event)
  }

  static renderUser(value){
    console.log(value)
    console.log(value)
    let sidebar = document.querySelector(".sidebar")
    let userList = document.querySelector("#user-list")
    let userNameLi = document.createElement("li")
    userNameLi.innerText = value
    userList.append(userNameLi)
    // debugger
    
  }

  static filterUserList(json) {
    // var lastUser = null
    console.log(json)
    let userList = json.messages.map(function(value){
      // debugger
      return value.user.name
    })
    
    let filterList = userList.filter(function (user, index, self) { 
      // debugger
      return self.indexOf(user) === index;
    })
    console.log(filterList)
    // debugger

    // console.log(userList)
    // json.messages.filter()
    // const result = [];
    // const map = new Map();
    // for (const user of json.messages) {
    //     if(!map.has(user.name)){
    //         map.set(user.name, true);    // set any value to Map
    //         result.push(
    //             user.name
    //         );
    //     }
    // }
    // debugger
    // json.messages.forEach(function(value){
    //   ChatArea.renderUser(value)
    //   // debugger
    // })
    filterList.forEach(function(value){

      // debugger
      ChatArea.renderUser(value)
    })
  }

  fetchChatUsers(event) {
    this.sideBar = document.querySelector(".sidebar")
    this.sideBar.style.display="block"
    console.log(event.target)
    ChatAdapter.fetchChatPage(event.target.dataset.id)
.then(json => ChatArea.filterUserList(json))

    // debugger
  }

}