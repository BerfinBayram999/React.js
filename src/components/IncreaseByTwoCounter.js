import React, { Component } from 'react'
import { increasebytwo_Counter } from '../redux/actions/actionCounters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class IncreaseByTwoCounter extends Component {
  render() {
    return (<span> 
        <button onClick={e=> {this.props.dispatch(increasebytwo_Counter());
        }}>
       2 arttır
       </button> </span>
    )
  }
}

//Aksiyonların içindeki increaseCounter
function mapDispatchToProps(dispatch){


    return {action:bindActionCreators(increasebytwo_Counter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);