import React from "react";

class Click extends React.Component {
    constructor() {
        super()
        this.state = {
        toggled: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
          return {
            toggled: !previousState.toggled 
          }
        })
      }

    render() {

        return (
            <div>
                
            <p>{this.state.toggled ? "ON" : "OFF"}</p>
            <button onClick={this.handleClick}>Click Me</button>
            
            </div>
        )
    }
}

export default Click;


