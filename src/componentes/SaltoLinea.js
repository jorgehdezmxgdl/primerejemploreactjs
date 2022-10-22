import React, { Component } from 'react'

export default class SaltoLinea extends Component {
  constructor(props) {
        super(props);
        console.log('constructor')
  }
  componentDidMount() {
    console.log('componente montado')
  }

  componentDidUpdate() {
    console.log('componente actualizado')
  }

  render() {
    return (
        <br />
    )
  }
}
