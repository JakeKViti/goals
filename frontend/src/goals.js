class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    displayGoals(){
        let goalcontainer = document.querySelector(".goals-container")
        let usergoalform = document.createElement('form')
        let completebtn = document.createElement('BUTTON')
        completebtn.innerText = "Complete"
        completebtn.id = `complete`
        usergoalform.appendChild(completebtn)
        usergoalform.id = `${this.id}`
        let goal = document.createTextNode(this.title)
        goalcontainer.appendChild(goal)
        goalcontainer.appendChild(usergoalform)
        this.displayDelete()       
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
        Goal.btnTest(usergoalform)    
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

    
}