import React, { Component} from 'react'


class Welcome extends Component {
    constructor() {
        super()
        this.state = { 
            message : 'The love is growing dead',
            area : 'The location is Asaba and not Lagos'
            
                   }
    }
    changeMessage(){
        this.setState({
            message : 'When a wounded soldier fall in love, i wonder if love is enough',
            area : 'The location is Lagos and not Asaba'
        })
    }
    render() {
        return (
            <div>
                <h3> Welcome to my world, the paradise on earth </h3>
                <h6>{this.state.message}</h6>
                <button onClick={()=>this.changeMessage()}> Condition</button>
                <h6>{this.state.area}</h6>
                <button onClick={()=>this.changeMessage()}> Condition</button>
            </div>
        )
    }
} 
export default Welcome