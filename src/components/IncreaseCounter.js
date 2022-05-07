import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/actionCounters'
import { connect } from 'react-redux'

class IncreaseCounter extends Component {
  render() {
    return (
      <span>
            <button onClick={e=> {this.props.dispatch(increaseCounter());
             }}>
            1 arttır
            </button>
      </span>
    )
  }
}


//Aksiyonların içindeki increaseCounter
function mapDispatchToProps(dispatch){


    return {action:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);