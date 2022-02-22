import React, { Component } from 'react'
import axios from 'axios'

import './../cotacao.css';


class Cotacao extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: [],
         bid: []
      }
    }
    componentDidMount(){
        axios.get('http://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(res => {
            this.setState({name: res.data.USDBRL.name})
            this.setState({bid: res.data.USDBRL.bid})
        })
        .catch(error => {
            console.log(error)
        })

    }
  render() {
      const {name, bid} = this.state
    return (
      <div className="main">
      <div className="container">
          <h1>{name}</h1>
          <h3>{bid}</h3>
    </div>
      </div>
    )
  }
}

export default Cotacao
