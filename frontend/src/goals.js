class Goal {
    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.user_id = goal.user_id
    }

    displayGoals(){
        let geol = document.getElementById('test')
        geol.innerText = `${this.title}`
    }
}