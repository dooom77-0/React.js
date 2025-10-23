import React, { Component } from 'react';
class Child extends Component {
    render() {
        return (
            <div className='conta'>
                <h2 className='Hi'>Hello {this.props.name}</h2>
            </div>
            
        );
    }
}
export default Child;