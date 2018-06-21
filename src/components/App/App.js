import React, { Component } from 'react';
import Header from '../Header/Header';
import NewPerson from '../NewPerson/NewPerson';
import FamousList from '../FamousList/FamousList';


import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { person: {name: '', role: ''}, famousList: []}
}

    handleChangeFor = (propName) => (event) => {
        console.log('handleChangeFor:', propName);
        this.setState( { person: {
            ...this.state.person, 
            [propName]: event.target.value
        }
    });
}

    handleSubmit = (event) => {
        console.log('new person:', this.state.person);
        event.preventDefault();                   
        this.setState({famousList: [...this.state.famousList, this.state.person]})
        this.setState({ person: {name: '', role: ''}});
        console.log('the person is:', this.state.person);
        console.log('the famousList is:', this.state.famousList);

        
    }

  render() {
    return (
      <div className="App">
         <Header />
         <NewPerson newPerson={this.state.person}
                    handleChangeFor={this.handleChangeFor}
                    handleSubmit={this.handleSubmit}/>
          <FamousList famousList={this.state.famousList} />
      </div>
    );
  }
}

export default App;
