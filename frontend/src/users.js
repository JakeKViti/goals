class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

    static login(){
        let username = document.getElementById('user-form')
        username.addEventListener("submit" , function(e){ 
            e.preventDefault()
            sss.findOrCreateUser(e)
            .then(dude => {
                console.log(dude)
                let newUser = new User(dude)
                username.reset()
                newUser.displayName()
            })
        })
    }   

    displayName(){
        console.log("ツ")
        let welcome = document.getElementById('qwerty')
        let question = document.getElementById('name-label')
        welcome.innerText = `Welcome ${this.name}!`
        question.innerText = "Enter a goal here:"
    }
}