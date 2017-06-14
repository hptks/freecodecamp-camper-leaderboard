import React from 'react'
import { connect } from 'react-redux'
import { fetch } from '../actions/camperActions'

@connect((store) => {
  return {
    campers: store.campers
  }
})

export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetch())
    setTimeout(() => {}, 1000)
  }

  render() {
    const users = this.props.campers.users
    const Campers = users.map((user) => {
      return (<tr>
                <td>{user.username}</td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
              </tr>)
    })

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">Leaderboard</div>
          <table class="table">
            <thead>
              <tr>
                <th>Camper name</th>
                <th>Points in past 30 days</th>
                <th>All time points</th>
              </tr>
            </thead>
            <tbody>
              {Campers}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
