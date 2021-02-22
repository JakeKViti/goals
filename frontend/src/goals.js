class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    displayGoals(){
        let x = document.createElement("LI");
        let t = document.createTextNode(Goal.userGoals[Goal.userGoals.length - 1].title);
        x.setAttribute("id", `goal-${(Goal.userGoals.length)}`);
        x.appendChild(t);
        let deletebtn = document.createElement("BUTTON");
        deletebtn.innerText = "Delete"
        deletebtn.setAttribute("id", `delete-${(Goal.userGoals.length)}`);
        x.appendChild(deletebtn);
        let completebtn = document.createElement("BUTTON");
        completebtn.innerText = "Complete Goal"
        completebtn.setAttribute("id", `complete-${(Goal.userGoals.length)}`);
        x.appendChild(completebtn);
        document.getElementById("myGoals").appendChild(x);
        debugger
        
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