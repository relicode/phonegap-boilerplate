import { connect } from 'react-redux'

import MainApplication from './component'
import { incrementHeartCounter } from '../../actions'


const mapStateToProps = (state) => ( { heartCounter: state.heartCounter } )

const mapDispatchToProps = (dispatch) => (
  {
    handleClick: () => (dispatch(incrementHeartCounter()))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(MainApplication)

