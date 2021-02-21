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
        document.getElementById("myForm").appendChild(y);
        let btn = document.createElement("BUTTON");
        asd.appendChild(btn);
        btn.innerText = "Submit"
        welcome.innerText = `Welcome ${this.name}!`
        question.innerText = "Enter a goal here:"
        nameinputter.remove()
        namesubmit.remove()
    }
}