class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.completed = goal.completed
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    displayGoals(){
        let goalcontainer = document.querySelector(".goals-container")
        let usergoalform = document.createElement('form')
        let completebtn = document.createElement('BUTTON')
        let goalz = document.createElement('p')
        if (this.completed == false) {
            completebtn.innerText = "Complete"
            completebtn.id = `complete`
            usergoalform.appendChild(completebtn)
        }
        usergoalform.id = `${this.id}`
        goalz.innerText = this.title 
        goalz.id = `t${this.id}`
        goalcontainer.appendChild(goalz)
        goalcontainer.appendChild(usergoalform)
        if (this.completed == true) {
            let completedGoal = document.getElementById(`t${this.id}`)
            let completed = completedGoal.innerText.strike()
            document.getElementById(`t${this.id}`).innerHTML = completed;
        }
        this.displayDelete()
        usergoalform.addEventListener('submit', this.completeGoal.bind(this))   
    }

    displayDelete(){
        let goalcontainer = document.querySelector(".goals-container")
        let usergoalform = document.createElement('form')
        let deletebtn = document.createElement('BUTTON')
        deletebtn.innerText = "Delete"
        deletebtn.id = `delete`
        usergoalform.appendChild(deletebtn)
        usergoalform.id = `${this.id}`
        goalcontainer.appendChild(usergoalform)
        usergoalform.addEventListener('submit', this.deleteGoal.bind(this))   
    }

    static goalForm(){
        let welcome = document.getElementById('qwerty')
        let question = document.getElementById('name-label')
        let nameinputter = document.getElementById('name-input')
        let namesubmit = document.getElementById('name-submitter')
        let asd = document.getElementById('user-inputer-container')
        let x = document.createElement("FORM");
        x.setAttribute("id", "myForm");
        asd.appendChild(x);
        let y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("id", "goal");
        document.getElementById("myForm").appendChild(y);
        let btn = document.createElement("BUTTON");
        document.getElementById("myForm").appendChild(btn);
        btn.innerText = "Submit"
        welcome.innerText = `Welcome!`
        question.innerText = "Enter a goal here:"
        nameinputter.remove()
        namesubmit.remove()
    }

    static newGoal(userid){
        console.log(userid)
        let newGoal = document.getElementById('myForm')
        newGoal.addEventListener("submit" , function(e){ 
            e.preventDefault()
            sss.createGoal(e, userid)
            .then(newGoal => {
                let goals = new Goal(newGoal)
                goals.displayGoals()
            })
        })
    }


    async completeGoal(e){
        e.preventDefault()
        let text = document.getElementById(`t${e.target.id}`)
        let completed = text.innerText.strike()
        document.getElementById(`t${e.target.id}`).innerHTML = completed;
        sss.completeGoal(e)
        e.target.remove()
    }

    async deleteGoal(e){
        e.preventDefault()
        let completed = document.getElementById(`${e.target.id}`)
        let text = document.getElementById(`t${e.target.id}`)
        sss.deleteProblem(e)
        completed.remove()
        text.remove()
        e.target.remove()
    }

}