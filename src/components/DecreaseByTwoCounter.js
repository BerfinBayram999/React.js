import React, { Component } from 'react'
import { decreasebytwo_Counter } from '../redux/actions/actionCounters';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DECREASEBYTWO_Counter } from '../redux/actions/actionTypes';

class DecreaseByTwoCounter extends Component {
  render() {
    return (
      <span> <button onClick={e=> {this.props.dispatch(decreasebytwo_Counter());
      }}>
     2 azalt
     </button></span>
    )
  }
}

//Aksiyonların içindeki increaseCounter
function mapDispatchToProps(dispatch){


  return {action:bindActionCreators(decreasebytwo_Counter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseByTwoCounter);