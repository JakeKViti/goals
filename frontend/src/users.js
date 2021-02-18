class User {
    //constructor(user)

    static login(){
        let username = document.getElementById('user-form')
        username.addEventListener("submit" , function(e){ 
            e.preventDefault()
            let nammer = document.getElementById('name-input').value
            console.log(nammer)
            sss.findOrCreateUser(nammer)
        })
    }
}