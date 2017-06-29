import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'


const WorkshopList = (props) => (
  return(
    <span>
      <h1>props.workshops</h1>
    </span>
  )
)

WorkshopList.propTypes = {
  workshops: PropTypes.array.isRequired
}

export default WorkshopList
