
class ChatAdapter {

  static baseUrl() {
    return 'http://localhost:3000/'
  }

  static chatsUrl() {
    return this.baseUrl() + 'chats/'
  }

  static usersUrl() {
    return this.baseUrl() + 'users/'
  }
  
  static headers(){
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  static fetchConfig(verb, bodyObject) {
    return {
      method: verb,
      headers: this.headers(),
      body: JSON.stringify(bodyObject)
    }
  }

  static userLoginFetch(userInput) {
    console.log(userInput)
    // debugger
    return fetch(this.usersUrl(), 
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
      // .then(json => createUserSession(json))
  }

  static fetchAllChats() {
    // console.log("fetch goes here")
    // console.log(this.chatsUrl())
    
    return fetch(this.chatsUrl())
    .then(response => response.json())
    // .then(json => renderAllChats(json))
  }


  static postMessageFetch(messageData) {
    console.log(messageData)
    // debugger
    return fetch('http://localhost:3000/messages', {
    "method": "POST",
    "headers": {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    "body" : JSON.stringify({
      "user_id": messageData.user_id,
      "chat_id": messageData.chat_id,
      "text": messageData.text//textArea.value
    })
  }).then(response => response.json())
  // debugger
  }

  static fetchChatPage(event){
    // console.log(event.target)
    return fetch(this.chatsUrl() + `${event.target.dataset.id}`)
    .then(response => response.json())
    // .then(data => renderChatRoom(data))
  }

}



// static baseUrl(){
//   return "http://localhost:3000"
// }

// static getTheHeadersPlease(){
//   return {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   }
// }

// static fetchConfig(verb, bodyObject) {
//   return {
//     method: verb,
//     headers: this.getTheHeadersPlease(),
//     body: JSON.stringify(bodyObject)
//   }
// }

// static getQuotesWithLikes() {
//   return fetch(this.baseUrl() + "/quotes?_embed=likes")
//     .then(res => res.json())
// }

// static addLikeToQuote(quoteId){
//   const fetchConfig = this.fetchConfig("POST", { quoteId: quoteId })
//   return fetch(this.baseUrl() + "/likes", fetchConfig)
//     .then(res => res.json())
// }

// static createQuote(quote){
//   const fetchConfig = this.fetchConfig("POST", quote);
//   return fetch(this.baseUrl() + "/quotes", fetchConfig)
//     .then(res => res.json())
// }

// static deleteQuote(quoteId) {
//   return fetch(this.baseUrl() + "/quotes/" + quoteId, { method: "DELETE" })
// }