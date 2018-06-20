import React, { Component } from 'react';

class Person extends Component {
    constructor (props) {
        super(props);
        this.state = { person: {name: '', role: ''}, famousList: []}
    }

        handleChangeFor = (propName) => (event) => {
            console.log('handleChangeFor:', propName);
            this.setState( {person: {
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
            
        }
    

    render() {
        return (
            <div> 
                <h3>My Fav Famous Stars</h3>
                <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChangeFor('name')} value={this.state.person.name} placeholder='name'/>
                        <input onChange={this.handleChangeFor('role')} value={this.state.person.role} placeholder='role'/>
                        <input type="submit" value="Submit" />
                </form>

                <p>Name: {this.state.person.name}</p>
                <p>Role: {this.state.person.role}</p>
                <ul>
                    {this.state.famousList.map( tacostand => 
                    <li key={tacostand.name}>{tacostand.name} is famous for {tacostand.role}</li>)}
                </ul>
            </div>

        );
    }
}

export default Person; 