class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

    //This will login the user into the site
    static login(){
        let username = document.getElementById('user-form');
        username.addEventListener("submit" , function(e){ 
            e.preventDefault();
            if (e.target.children[1].value != "") {
                fetchCall.findOrCreateUser(e)
                .then(user => {
                    let newUser = new User(user);
                    username.reset();
                    newUser.displayUserGoals();
                })
            }
        })
    }   

    //This will get all the user's goals and display them
    displayUserGoals(){
        Goal.goalForm(this.name);
        fetchCall.getAllGoals()
        .then(goals => {
            for (let i=0; i < goals.length; i++){
                if (this.id == goals[i].user_id){
                    let personalGoal = new Goal(goals[i]);
                    personalGoal.renderGoals();
                }
            }
        })
        Goal.newGoal(this.id);
    }
}