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

    static newGoal(){
        console.log("Kiara is best boss")
        let newGoal = document.getElementById('myForm')
        newGoal.addEventListener("submit" , function(e){ 
            e.preventDefault()
            sss.createGoal(e)
            .then(newGoal => {
                let goals = new Goal(newGoal)
                goals.displayGoals()
            })
        })
    }
}