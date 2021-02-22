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
        Goal.goalForm()
        sss.displayAllGoals()
        .then(zzz => {
            console.log(zzz)
            for (let i=0; i < zzz.length; i++){
                if (this.id == zzz[i].user_id){
                    let goals = new Goal(zzz[i])
                    goals.displayGoals()
                }
            }
        })
        Goal.newGoal(this.id)
    }
}