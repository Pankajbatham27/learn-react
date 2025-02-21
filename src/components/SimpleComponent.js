import React, { Component } from "react";

class SimpleComponent extends React.Component{

    constructor(props) {
        super();
        this.state = {
            message : `This is class state - ${props.name}`
        } 
    }

    
    updateState = () => {
        this.setState({ message: 'State is updated' })
    } 

    render() {
        return (
            <>
            <div>{this.state.message}</div>
            <button onClick={this.updateState}>Update</button>
            </>
        )
    }
}

export default SimpleComponent;