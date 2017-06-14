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
    const Campers = users.map((user, i) => {
      return (<tr>
                <td>{i + 1}</td>
                <td><img class="profileimg" src={user.img} />&nbsp;{user.username}</td>
                <td class="adjust">{user.recent}</td>
                <td class="adjust">{user.alltime}</td>
              </tr>)
    })

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading"><strong>Leaderboard</strong></div>
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Camper name</th>
                <th class="adjust">Points in past 30 days</th>
                <th class="adjust">All time points</th>
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
