import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super()
    this.state = {
      component: null
    }
  }
  componentWillMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        component: component.default ? component.default : component
      }))
    })
  }
  render() {
    return this.props.children(this.state.component)
  }
}
