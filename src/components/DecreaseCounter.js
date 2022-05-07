import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/actionCounters';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DecreaseCounter extends Component {
  render() {
    return (
      <span> <button onClick={e=> {this.props.dispatch(decreaseCounter());
      }}>
     1 azalt
     </button> </span>
    )
  }
}

//Aksiyonların içindeki increaseCounter
function mapDispatchToProps(dispatch){


  return {action:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);