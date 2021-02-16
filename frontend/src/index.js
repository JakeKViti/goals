const sss = new FetchCalls();
sss.consoleLogUsers()

let username = document.getElementById('user-form')
let nammer = document.getElementById('name-input')
//let username = document.getElementById('name-input')

username.addEventListener("submit" , function(e){ 
    e.preventDefault()
})
//debugger