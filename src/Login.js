class Login {

  constructor() {
    this.userForm = document.querySelector("#user-form")
    this.userDisplay = document.querySelector("#user-display")
    this.userNameDisplay = document.createElement("h2")
    this.logOutBtn = document.createElement("button")

    // const userForm = this.userForm
    
    if (localStorage.username) {
      let session_json = {
        name: localStorage.username,
        id: localStorage.userId
      }

      this.createUserSession(session_json)
    }

    

    

    this.userForm.addEventListener("submit", this.checkUserInput.bind(this))
  }

//   const userForm = document.querySelector("#user-form")
// // const userDisplay = document.createElement("div")
// const userDisplay = document.querySelector("#user-display")
// const userNameDisplay = document.createElement("h2")
// let logOutBtn = document.createElement("button")

  // userDisplay.className = "user-display"

  createUserSession(json) {
    console.log(json)
    localStorage.clear()
    localStorage.setItem("username", json.name)
    localStorage.setItem("userId", json.id)
    console.log(localStorage.username)

    this.userForm[0].value = ""

    this.userForm.style.display="none";
    this.userDisplay.style.display="block";
    this.userDisplay.append(this.userNameDisplay)
    this.userNameDisplay.innerText = localStorage.username + "!"

    // let logOutBtn = document.createElement("button")
    let chatBox = document.querySelector("#chat-box")

    if (chatBox) {
      chatBox.style.display = "block";
    }

    this.logOutBtn.className =  "logout-button"
    this.logOutBtn.innerText = "Log Out!"
    this.logOutBtn.dataset.id = localStorage.userId
    this.userDisplay.append(this.logOutBtn)

    this.logOutBtn.addEventListener("click", function(event){
      console.log(event.target)
      console.log(localStorage)
      localStorage.clear()
      let userform = document.querySelector("#user-form")
      let userdisplay = document.querySelector("#user-display")
      let chatBox = document.querySelector("#chat-box")

      // debugger
      userform.style.display="block";
      userdisplay.style.display="none";
      chatBox.style.display="none";

    })

  }

  checkUserInput(event) {
    event.preventDefault()
    console.log(event.target)
    // debugger
    this.userInput = event.target[0].value 
    console.log(this.userInput)
    ChatAdapter.userLoginFetch(this.userInput)
    .then(json => this.createUserSession(json))
    // debugger
  }

// userForm.addEventListener("submit", checkUserInput)


}