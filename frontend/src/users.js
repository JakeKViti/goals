class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

    static login(){
        let username = document.getElementById('user-form')
        username.addEventListener("submit" , function(e){ 
            e.preventDefault()
            sss.findOrCreateUser(e)
            .then(dude => {
                console.log(dude)
                let newUser = new User(dude)
                username.reset()
                newUser.displayName()
            })
        })
    }   

    displayName(){
        console.log("ツ")
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
        sss.displayAllGoals()
        .then(zzz => {
            console.log(zzz)
            for (let i=0; i < zzz.length; i++){
                if (this.id == zzz[i].user_id){
                    let goals = new Goal(zzz[i])
                    goals.displayGoals()
                }
            }
        })
        
    }
}