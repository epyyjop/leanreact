import React, { Component } from 'react'
import UserProfile from './UserProfile'
import PropTypes from 'prop-types'

class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { username: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  }


    render(){
      return (
        <UserProfile username={this.state.username}/>
    )
  }
}

UserProfile.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfileContainer
