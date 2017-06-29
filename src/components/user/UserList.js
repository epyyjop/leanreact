import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import View from '../layout/View'
import UserProfileContainer from './UserProfileContainer'

function showUserProfile (user, history) {
  history.push(`/users/${user.username}`)
}

const UserList = (props) => {
  return(
      <View style={{ display: 'flex' }}>
        <View>
          { props.users.map(user => (
            <ListItem
              onClick={showUserProfile.bind(this, user, props.history)} key={user.username} style={{color: "black"}}
              primaryText={ `${user.name.first} ${user.name.last}`}
              leftIcon={<ActionGrade color={pinkA200} />}
              rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
            />
          ))}
        </View>
        <Route path={`${props.match.url}/:username`} component={UserProfileContainer} />
      </View>
    )
}

export default withRouter(withWidth()(UserList))

UserList.contextTypes = {
  users: PropTypes.array.isRequired
}
