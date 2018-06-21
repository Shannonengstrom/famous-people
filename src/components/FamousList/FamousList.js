import React, { Component } from 'react';

import Person from '../Person/Person';

class FamousList extends Component {

    render () {
        return (
            <div>
                <ul>
        {this.props.famousList.map( item =>   <Person person={item} /> )}      
                </ul>
            </div>
        );
    }
}


export default FamousList; 

    