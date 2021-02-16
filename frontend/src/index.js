const sss = new FetchCalls();
sss.consoleLogUsers()

let username = document.getElementById('user-form')

//let username = document.getElementById('name-input')

username.addEventListener("submit" , function(e){ 
    e.preventDefault()
    let nammer = document.getElementById('name-input')
    console.log(nammer.value)
})
