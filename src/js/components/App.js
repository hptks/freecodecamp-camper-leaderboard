import React from 'react'
import { connect } from 'react-redux'

import { fetch, sortAscRec, sortDesRec, sortAscAll, sortDesAll } from '../actions/camperActions'

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

  sortCampersRecent() {
    const { users } = this.props.campers
    let element = document.getElementById('toggleRecent')
    if (element.className == 'desRec') {
      this.props.dispatch(sortAscRec(users))
      element.className = 'ascRec'
    } else {
      this.props.dispatch(sortDesRec(users))
      element.className = 'desRec'
    }
  }

  sortCampersAlltime() {
    const { users } = this.props.campers
    let element = document.getElementById('toggleAlltime')
    if (element.className == 'desAll') {
      this.props.dispatch(sortAscAll(users))
      element.className = 'ascAll'
    } else {
      this.props.dispatch(sortDesAll(users))
      element.className = 'desAll'
    }
  }

  render() {
    const { users } = this.props.campers
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
                <th class="adjust"><a id="toggleRecent" class="desRec" onClick={this.sortCampersRecent.bind(this)}>Points in past 30 days</a></th>
                <th class="adjust"><a id="toggleAlltime" class="desAll" onClick={this.sortCampersAlltime.bind(this)}>All time points</a></th>
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
