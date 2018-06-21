import React, { Component } from 'react'; 

import Person from '../Person/Person';

class NewPerson extends Component {

    render() {
        return (
            <div> 
                <h3>My Fav Famous Stars</h3>
                <form onSubmit={this.props.handleSubmit}>
                        <input onChange={this.props.handleChangeFor('name')} value={this.props.newPerson.name} placeholder='name'/>
                        <input onChange={this.props.handleChangeFor('role')} value={this.props.newPerson.role} placeholder='role'/>
                        <input type="submit" value="Submit" />
                </form>

                <p>Name: {this.props.newPerson.name}</p>
                <p>Role: {this.props.newPerson.role}</p>
               
            </div>

        )
    }
}

export default NewPerson; 