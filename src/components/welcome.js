import React, { Component } from 'react'

class Welcome extends Component {
    
    render() {
        const {name , MovieName} = this.props
        return <h1>{name} {MovieName} </h1>
    }
}
export default Welcome