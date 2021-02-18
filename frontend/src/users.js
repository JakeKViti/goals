class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

    static login(){
        let username = document.getElementById('user-form')
        username.addEventListener("submit" , function(e){ 
            e.preventDefault()
            let nammer = document.getElementById('name-input').value
            console.log(nammer)
            let dude = sss.findOrCreateUser(nammer)
            //debugger
            //let nuser = User.new(dude)
        })
    }
}