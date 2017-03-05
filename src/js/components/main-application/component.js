import React, { PropTypes } from 'react'


const HEART_SYMBOL =  '\u2665'

const MainApplication = (props) => (
  <h1>
    <span onClick={props.handleClick}>ClickMe</span>
    {Array(props.heartCounter).join(HEART_SYMBOL)}
  </h1>
)

MainApplication.propTypes = {
  heartCounter: PropTypes.number,
  handleClick: PropTypes.func.isRequired
}

export default MainApplication

