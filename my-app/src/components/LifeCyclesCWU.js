import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifecyclesCWUTracker'

export class LifecyclesCWUTracker extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visible: true
      }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible}))
    }

  render() {
    return (
      <div>
        {this.state.visible && <LifeCyclesCWUTracker />}
        <button onClick={this.toggleDisplay}>Toggle Display</button>
      </div>
    )
  }
}

export default LifecyclesCWUTracker