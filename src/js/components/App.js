import React from 'react'
import { connect } from 'react-redux'
import { fetch } from '../actions/camperActions'

@connect((store) => {
  return {
    campers: store.campers
  }
})

export default class App extends React.Component {
  render() {
    return (
      <h2>Hi there</h2>
    )
  }
}
