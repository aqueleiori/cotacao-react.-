import React, { Component } from 'react'
import axios from 'axios'

import './../cotacao.css'

class Btc extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      name: [],
      bid: []
    }
  }
  componentDidMount(){
    axios.get("https://economia.awesomeapi.com.br/json/last/BTC-BRL")
    .then(res =>{
      this.setState({name: res.data.BTCBRL.name})
      this.setState({bid: res.data.BTCBRL.bid})
    })
  }
  render(){
    const {name, bid} = this.state
    return (
      <div className="main">
      <div className='container'>
        <h1>{name}</h1>
        <h3>{bid}</h3>
      </div>
      </div>
    )
  }  
}

export default Btc
