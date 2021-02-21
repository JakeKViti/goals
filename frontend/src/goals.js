class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    displayGoals(){
        var x = document.createElement("LI");
        var t = document.createTextNode(Goal.userGoals[Goal.userGoals.length - 1].title);
        x.appendChild(t);
        document.getElementById("myGoals").appendChild(x);

        //let goalcontainer = document.getElementsById("goals-container")
        //let gaol = document.createElement('li')
        //gaol.setAttribute('goal-id', this.id)
        //gaol.innerText = `${this.title}`
        //goalcontainer.insertAdjacentHTML('beforeend', goalcontainer)
        //debugger
    }
}