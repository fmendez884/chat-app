class Chat {
  constructor(chatData) {
    this.id = chatData.id
    this.name = chatData.name
  }

  // likeButtonClicked = () => {
  //   QuotesAdapter.addLikeToQuote(this.id)
  //     .then(this.incrementLikes)
  // }

  // incrementLikes = like => {
  //   this.numberOfLikes.innerText++
  // }

  // deleteButtonClicked = () => {
  //   QuotesAdapter.deleteQuote(this.id)
  //     .then(data => this.domQuote.remove())
  //   // console.log(this.id)
  // }

  // chatClicked = () => {
  //   ChatAdapter.fetchChatPage(event)
  // }

  render(){
      // debugger
    
      
    this.chatLi = document.createElement("li")
    this.chatLi.innerText = this.name
    this.chatLi.dataset.id = this.id
    // this.chatLi.innerText.addEventListener("click", )
    // chatUl.append(chatLi)
    // renderChatBox()
    this.chatLi.addEventListener("click", function(event){
      // console.log(event.target)
      // ChatAdapter.fetchChatPage(event)
      // .then(messageData => new MessageList)
      new ChatArea(event)
    })
    return this.chatLi
  }

}

  //   this.domQuote = document.createElement("li")
  //   this.domQuote.className = "quote-card"

  //   this.domQuote.innerHTML = `
  //     <blockquote class="blockquote">
  //       <p class="mb-0">${ this.quoteText }</p>
  //       <footer class="blockquote-footer">${ this.author }</footer>
  //       <br>
  //       <button class='btn-success'>Likes: <span class="num-likes">${ this.likesCount() }</span></button>
  //       <button class='btn-danger'>Delete</button>
  //     </blockquote>`

  //   this.likeButton = this.domQuote.querySelector(".btn-success")
  //   this.deleteButton = this.domQuote.querySelector(".btn-danger")
  //   this.numberOfLikes = this.likeButton.querySelector(".num-likes")

  //   this.deleteButton.addEventListener("click", this.deleteButtonClicked)
  //   this.likeButton.addEventListener("click", this.likeButtonClicked)