import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }
  // accessing from the component and fetching from a link with data
  componentDidMount() {
    fetch('https:jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  render(){
    return (
      <div className="App">
      <CardList name='Alesito'>
      {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
          ))}
      <h1>Alesito</h1>
      </CardList>
        
      </div>
    );
  }
}

export default App;
