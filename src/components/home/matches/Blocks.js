import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase'
import {firebaseLooper, reverseArr} from '../../utils/misc'

export default class Blocks extends Component {
    state = {
        matches:[]
    }

    componentDidMount() {
        firebaseMatches
        .limitToLast(6)
        .once('value')
        .then((snapshot) => {
            const matches = firebaseLooper(snapshot)
            this.setState({matches: reverseArr(matches)})
            console.log(this.state.matches)
        })
        .catch(err => console.log(err))
    }

    showMatches = () => {
        return (<div>
            match
        </div>)
    }

  render() {
    return (
      <div className='home_matches'>
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}
