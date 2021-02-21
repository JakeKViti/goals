class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    displayGoals(){
        let geol = document.getElementById('test')
        geol.innerText = `${this.title}`
        debugger
    }
}