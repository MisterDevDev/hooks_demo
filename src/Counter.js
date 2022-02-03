import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('Your component mounted!')
        this.setState({
            count: this.state.count + 1
        })
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
    return(
        <div>
            <h3>Counter Demo</h3>
            <Link to='/' > Switch to Groceries </Link>
            <h3>Your counter is at  {this.state.count}</h3>
            <div>
                <button onClick={this.decrementCounter}> - </button>
                <button onClick={this.incrementCounter}> + </button>
            </div>
        </div>
    )
    }
}

export default Counter