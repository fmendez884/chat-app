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

// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

function createUserSession(json) {
  console.log(json)
  localStorage.clear()
  localStorage.setItem("username", json.name)
  localStorage.setItem("userId", json.id)
  console.log(localStorage.username)

  userForm[0].value = ""
  // userForm.parentNode.replaceChild(userDisplay, userForm)
  // userDispla y.innerText = localStorage.username + "!"
  userForm.style.display="none";
  // userForm.append(userDisplay)
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

  // userForm.append(userNameDisplay)
  // let userSession = document.cookie = `name=${json.name}`
  // console.log(userSession)
  // console.log(document.cookie)
  // setCookie("UserName", json.name , null);
  // debugger
}

function userLoginFetch(userInput) {
  console.log(userInput)
  fetch(USERS_URL, 
    {
    "method": "POST",
    "headers": {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    "body" : JSON.stringify({
      "name" : userInput
    })
  }).then(response => response.json())
    .then(json => createUserSession(json))
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

// const textArea = document.createElement("textarea")
// const textAreaButton = document.createElement("button")
function renderChatBox() {
  chatBox.innerHTML = `<textarea id="messageText" class="text" cols="86" rows ="20" name="messageText" form="sendMessageForm"></textarea>
<form id="sendMessageForm" name="sendMessageForm" method="post">
   <input type="submit" value="Send" class="sendButton">
</form>`
}

// textArea.style.height = "65px";
// textArea.style.width = "800px";

// textAreaButton.innerHTML = "Send"

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

function fetchAllChats() {
  console.log("fetch goes here")
  fetch(CHATS_URL)
  .then(response => response.json())
  .then(json => renderAllChats(json))
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

// function renderNewMessage(json) {
//   console.log(json)
//   // let messageLi = document.createElement("li")
//   // messageLi.innerText = `${value.user.name}(${value.updated_at}): ${value.text}`
//   // // debugger
//   // messageUl.append(messageLi)
//   // debugger
// }

function postMessageFetch(event) {
  event.preventDefault()
  // debugger
  let userId = localStorage.userId 
  let chatTitle = document.querySelector("h1")
  let textArea = document.querySelector("textarea")
  let chatId = chatTitle.dataset.id
  // debugger
  console.log(event.target)
  console.log(textArea)

  fetch('http://localhost:3000/messages', {
	"method": "POST",
	"headers": {
		"Content-Type" : "application/json",
		"Accept" : "application/json"
	},
	"body" : JSON.stringify({
		"user_id": userId,
		"chat_id": chatId,
		"text": textArea.value
	})
}).then(response => response.json())
  .then(json => renderOneMessage(json))
// .then(json => renderNewMessage(json))

  // debugger
  console.log(chatId)
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
  // chatBox.append(textArea)
  // chatBox.append(textAreaButton)
  // renderChatBox()
  messageForm.addEventListener("submit", postMessageFetch)
}

function fetchChatPage(event){
  fetch(CHATS_URL + `${event.target.dataset.id}`)
  .then(response => response.json())
  .then(data => renderChatRoom(data))
}

document.addEventListener("DOMContentLoaded", function(event){
  fetchAllChats()
  // fetchChatPage()
  // mainBody.append(mainH1)
  // mainH1.innerText = "Chat app"
  // mainDiv.innerText = "Chat goes here"
})

chatUl.addEventListener("click", function(event){
  console.log(event.target.dataset.id)
  fetchChatPage(event)
})

// chatBox.addEventListener("submit")