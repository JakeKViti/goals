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
}