let username = document.getElementById('user-form')

username.addEventListener("submit" , function(e){ 
    e.preventDefault()
    let nammer = document.getElementById('name-input')
    console.log(nammer.value)
})
