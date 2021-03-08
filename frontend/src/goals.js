class Goal {

    static userGoals = []

    constructor(goal){
        this.title = goal.title
        this.id = goal.id
        this.completed = goal.completed
        this.user_id = goal.user_id
        Goal.userGoals.push(goal)
    }

    //this will render each of the user's goals
    renderGoals(){
        let goalcontainer = document.querySelector(".goals-container");
        let goalp = document.createElement('p');
        goalp.innerText = this.title;
        goalp.id = `t${this.id}`;
        goalcontainer.appendChild(goalp);
        if (this.completed == true) {
            let completedGoal = document.getElementById(`t${this.id}`);
            let completed = completedGoal.innerText.strike();
            document.getElementById(`t${this.id}`).innerHTML = completed;
        } else {
            this.renderComplete();
        }
        this.renderDelete();
    }

    //This will render the complete button
    renderComplete(){
        let goalcontainer = document.querySelector(".goals-container");
        let usergoalform = document.createElement('form');
        let completebtn = document.createElement('BUTTON');
        completebtn.innerText = "Complete";
        completebtn.id = `complete`;
        usergoalform.appendChild(completebtn);
        usergoalform.id = `${this.id}`;
        goalcontainer.appendChild(usergoalform);
        usergoalform.addEventListener('submit', this.completeGoal.bind(this));  
    }

    //This will render the complete button
    renderDelete(){
        let goalcontainer = document.querySelector(".goals-container");
        let usergoalform = document.createElement('form');
        let deletebtn = document.createElement('BUTTON');
        deletebtn.innerText = "Delete";
        deletebtn.id = `delete`;
        usergoalform.appendChild(deletebtn);
        usergoalform.id = `${this.id}`;
        goalcontainer.appendChild(usergoalform);
        usergoalform.addEventListener('submit', this.deleteGoal.bind(this));   
    }

    //This will render the form to create a new goal
    static goalForm(username){
        let welcome = document.getElementById('qwerty');
        let question = document.getElementById('name-label');
        let nameinputter = document.getElementById('name-input');
        let namesubmit = document.getElementById('name-submitter');
        let asd = document.getElementById('user-inputer-container');
        let goalForm = document.createElement("FORM");
        goalForm.setAttribute("id", "myForm");
        asd.appendChild(goalForm);
        let goalInputter = document.createElement("INPUT");
        goalInputter.setAttribute("type", "text");
        goalInputter.setAttribute("id", "goal");
        document.getElementById("myForm").appendChild(goalInputter);
        let goalbtn = document.createElement("BUTTON");
        document.getElementById("myForm").appendChild(goalbtn);
        goalbtn.innerText = "Submit";
        welcome.innerText = `Welcome ${username}!`;
        question.innerText = "Enter a goal here:";
        nameinputter.remove();
        namesubmit.remove();
    }

    //This will create the new goal
    static newGoal(userid){
        let newGoal = document.getElementById('myForm')
        newGoal.addEventListener("submit" , function(e){ 
            e.preventDefault();
            fetchCall.createGoal(e, userid)
            .then(newGoal => {
                let goals = new Goal(newGoal);
                goals.renderGoals();
            })
        })
    }

    //This will complete the goal when complete button gets pressed
    async completeGoal(e){
        e.preventDefault();
        let goalText = document.getElementById(`t${e.target.id}`);
        let completed = goalText.innerText.strike();
        document.getElementById(`t${e.target.id}`).innerHTML = completed;
        fetchCall.completeGoal(e);
        e.target.remove();
    }

    //This will delete the goal when delete button gets pressed
    async deleteGoal(e){
        e.preventDefault();
        let completed = document.getElementById(`${e.target.id}`);
        let goalText = document.getElementById(`t${e.target.id}`);
        fetchCall.deleteGoal(e);
        completed.remove();
        goalText.remove();
        e.target.remove();
    }
}