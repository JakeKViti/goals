class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

    static login(){
        let username = document.getElementById('user-form')
        username.addEventListener("submit" , function(e){ 
            e.preventDefault()
            fetchCall.findOrCreateUser(e)
            .then(user => {
                let newUser = new User(user)
                username.reset()
                newUser.displayName()
            })
        })
    }   

    displayName(){
        Goal.goalForm()
        fetchCall.displayAllGoals()
        .then(goals => {
            for (let i=0; i < goals.length; i++){
                if (this.id == goals[i].user_id){
                    let personalGoal = new Goal(goals[i])
                    personalGoal.displayGoals()
                }
            }
        })
        Goal.newGoal(this.id)
    }
}