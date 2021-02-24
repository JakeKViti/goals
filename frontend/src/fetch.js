class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/api/v1"
    this.userURL = `${this.baseURL}/users`
    this.goalURL = `${this.baseURL}/goals`
    }

    findOrCreateUser(e){
        return fetch(this.userURL, {
            method: 'POST',
            headers:  {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(
              {
                users: {
                    name: e.target.children[1].value
                }
            })
          })
          .then(resp => {
            let json = resp.json()
            console.log(json) 
            return json     
        })
    }

    displayAllGoals(){
      return fetch(this.goalURL)
      .then(resp => {
        let json = resp.json()
        return json  
      })
  }

  createGoal(e, userid){
    return fetch(this.goalURL, {
        method: 'POST',
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
          {
            goals: {
                title: e.target.children[0].value,
                completed: false,
                user_id: userid
            }
        })
      })
      .then(resp => {
        let json = resp.json()
        console.log(json) 
        return json     
    })
  }

  deleteProblem(e) {
        fetch(`${this.goalURL}/${e.target.id}`, {
        method: "DELETE"
    })
  }

  completeGoal(e){
    return fetch(`${this.goalURL}/${e.target.id}`, {
        method: 'PATCH',
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
          {
            goals: {
              completed: true
            }
        })
      })
      .then(resp => {
        let json = resp.json()
        console.log(json) 
        return json     
    })
}
}