import React, { Component } from 'react';

class Person extends Component {
    constructor (props) {
        super(props);
        this.state = { person: {name: '', role: ''}}
    }

        handleChangeFor = (propName) => (event) => {
            console.log('handleChangeFor:', propName);
            this.setState( {person: {...this.state.person, [propName]: event.target.value
            }
        });
    }

        handleSubmit = (event) => {
            console.log('new star:', this.state.person.name, 'is famous for their role in', this.state.person.role)
            event.preventDefault();       
        }
    

    render() {
        return (
            <div> 
                <h3>My Fav Famous Stars</h3>
                <form onSubmit={this.handleSubmit}>
                    <label> Name: 
                        <input onChange={this.handleChangeFor('name')}/>
                    </label>
                    <label> Role: 
                        <input onChange={this.handleChangeFor('role')}/>
                    </label>
                        <input type="submit" value="Submit" />
                </form>

                <p>{this.state.person.name} is famous for their role in {this.state.person.role}</p>

            
           
            </div>

        );
    }
}

export default Person; 