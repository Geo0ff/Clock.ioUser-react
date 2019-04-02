import React, { Component } from 'react';
import './App.css';
import User from './components/user';

class App extends Component {

  
  // list of users with name and password
 state = { 
    users: [ 
      {id:'john1', name: 'john'},
      {id:'peter1', name: 'peter'},
      {id:'jill1', name: 'jill'}
    ]
  }

  
deleteUser = (index, e) => {
  const users = Object.assign([], this.state.users); // object.assign takes state
  // and create referens not duplicate array 
  users.splice(index, 1);//splice  removes 1 user 
  this.setState({users:users})
}
changeUserName = (id, e ) => { 
const index = this.state.users.findIndex((user) =>{
  return user.id === id 
});

const user = Object.assign({}, this.state.users[index]);

user.name = e.target.value;

const users = Object.assign([], this.state.users);

users[index] = user;
this.setState({users:users});
}


  render() {
    return (
      <div className="App">
        <ul>
        {
          this.state.users.map((user, index) =>{
           return(<User 
           key={user.id}
           delEvent={this.deleteUser.bind(this, index)}
           changeEvent={this.changeUserName.bind(this, user.id)}
           >{user.name}</User>)
          })
        }
          </ul>
       </div>
    );
  }
}

export default App;
