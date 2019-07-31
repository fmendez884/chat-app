const BASE_URL = 'http://localhost:3000/'
const CHATS_URL = BASE_URL + 'chats/'
const USERS_URL = BASE_URL + 'users/'

const mainBody = document.querySelector("body")
// const mainH1 = document.createElement("h1")
const mainH1 = document.querySelector("h1")
const mainDiv = document.querySelector("div")
const chatUl = document.querySelector("#chat-list")
const messageUl = document.querySelector("#message-list")
const chatBox = document.querySelector("#chat-box")
const userForm = document.querySelector("#user-form")
// const userDisplay = document.createElement("div")
const userDisplay = document.querySelector("#user-display")
const userNameDisplay = document.createElement("h2")
let logOutBtn = document.createElement("button")

userDisplay.className = "user-display"
const textArea = document.querySelector("textarea")

function createUserSession(json) {
  console.log(json)
  localStorage.clear()
  localStorage.setItem("username", json.name)
  localStorage.setItem("userId", json.id)
  console.log(localStorage.username)

  userForm[0].value = ""

  userForm.style.display="none";
  userDisplay.style.display="block";
  userDisplay.append(userNameDisplay)
  userNameDisplay.innerText = localStorage.username + "!"

  logOutBtn.className =  "logout-button"
  logOutBtn.innerText = "Log Out!"
  logOutBtn.dataset.id = localStorage.userId
  userDisplay.append(logOutBtn)

  logOutBtn.addEventListener("click", function(event){
    console.log(event.target)
    console.log(localStorage)
    localStorage.clear()
    userForm.style.display="block";
    userDisplay.style.display="none";
  })

}

function checkUserInput(event) {
  event.preventDefault()
  console.log(event.target)
  let userInput = event.target[0].value 
  console.log(userInput)
  userLoginFetch(userInput)
  // debugger
}

userForm.addEventListener("submit", checkUserInput)

function renderChatBox() {
  chatBox.innerHTML = `<textarea id="messageText" class="text" cols="86" rows ="20" name="messageText" form="sendMessageForm"></textarea>
<form id="sendMessageForm" name="sendMessageForm" method="post">
   <input type="submit" value="Send" class="sendButton">
</form>`
}

function renderOneChat(value, index) {
  console.log(value)
  console.log(index)
  // debugger

  
  let chatLi = document.createElement("li")
  chatLi.innerText = value.name
  chatLi.dataset.id = value.id
  chatUl.append(chatLi)
  // renderChatBox()
}

function renderAllChats(json) {
  json.forEach(renderOneChat)
}

function renderOneMessage(value) {
  console.log(value)
  renderChatBox()
  let textArea = document.querySelector("textarea")
  textArea.value = ""
  let messageLi = document.createElement("li")
  messageLi.innerText = `${value.user.name}(${value.updated_at}): ${value.text}`
  // debugger
  messageUl.append(messageLi)
}

function messageFormEvent(event) {
  let userId = localStorage.userId 
  let chatTitle = document.querySelector("h1")
  let textArea = document.querySelector("textarea")
  let chatId = chatTitle.dataset.id

  ChatAdapter.postMessageFetch()
  .then(renderOneMessage())
}

function renderChatRoom(data) {
  console.log(data.name)

  let chatTitle = document.createElement("h1")
  chatTitle.innerText = data.name
  chatTitle.dataset.id = data.id
  chatUl.parentNode.replaceChild(chatTitle, chatUl);

  data.messages.forEach(renderOneMessage)
  mainDiv.append(chatBox)
  let textArea = document.querySelector("#messageText")
  let messageForm = document.querySelector("#sendMessageForm")

  messageForm.addEventListener("submit", messageFormEvent(event))
}

document.addEventListener("DOMContentLoaded", function(event){
  ChatAdapter.fetchAllChats()
  .then(json => renderAllChats(json))
  // debugger
})

chatUl.addEventListener("click", function(event){
  console.log(event.target.dataset.id)
  ChatAdapter.fetchChatPage(event)
  .then(json => renderChatRoom(json))
})
