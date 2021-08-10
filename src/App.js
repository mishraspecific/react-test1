import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list';
import { SearchBox } from './component/search-box/search-box';

class App extends Component {

  constructor(){
    super();
    this.state = {
      names: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({names : users}))
  }

  render(){
    const {names, searchField } = this.state;
    const searchedNames = names.filter( user =>
      user.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          <h1>Manish Test Project</h1>
          <SearchBox placeHolder = {'Search monster'} handleChange = { e => {
              this.setState({searchField: e.target.value})
            }} 
          />
          <CardList names = {searchedNames} >
          </CardList>
         
          
          <button onClick= {() => this.setState({textString : 'Hello Superman' })}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
