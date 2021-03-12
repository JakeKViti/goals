class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/api/v1"
    this.userURL = `${this.baseURL}/users`
    this.goalURL = `${this.baseURL}/goals`
    }

    //this will create or find a user
    async findOrCreateUser(e){
        const resp = await fetch(this.userURL, {
        method: 'POST',
        headers: {
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
      let json = resp.json();
      return await json;
    }

    //this will get all the goals in the database
    async getAllGoals(){
      const resp = await fetch(this.goalURL);
      let json = resp.json();
      return await json;
  }

  //this will create a new goal
  async createGoal(e, userid){
    const resp = await fetch(this.goalURL, {
      method: 'POST',
      headers: {
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
    let json = resp.json();
    return await json;
  }

  //This will delete a goal
  async deleteGoal(e) {
        fetch(`${this.goalURL}/${e.target.id}`, {
        method: "DELETE"
    })
  }

  //This will complete a goal
  async completeGoal(e){
    const resp = await fetch(`${this.goalURL}/${e.target.id}`, {
      method: 'PATCH',
      headers: {
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
    let json = resp.json(); 
    return await json;
  }
}