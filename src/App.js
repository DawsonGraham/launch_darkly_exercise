import React, { Component } from 'react';
import logo from './logo.svg';
import LDClient from 'ldclient-js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showResults: false,
      featureFlags: {
        defaultSuperBowlWinner: null
      }
    }
  }

  componentDidMount() {
    const user = {
      key: "Los Angeles"
    }
    this.ldclient = LDClient.initialize('5c4d02a9575ccb5233606fd7', user);
    this.ldclient.on('ready', this.onLDReady.bind(this))
  }

  onLDReady() {
    console.log('feature flag test',this.ldclient.variation('default-super-bowl-winner'))
  }

  render() {
    let winnerLogo = undefined
    let winnerText = undefined
    
    if(this.state.featureFlags.defaultSuperBowlWinner) {
      if(this.state.showResults)  {
        winnerLogo = "http://evensondesign.com/wp-content/uploads/2013/04/patriots_a_logo_800x300.jpg"
        winnerText = "The New England Patriots!"
      }
    } else if (!this.state.featureFlags.defaultSuperBowlWinner) {
        if(this.state.showResults) {
          winnerLogo = "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2014/05/Los_Angeles_Rams_logo.jpg"
          winnerText = "The Los Angeles Rams!"
        }
    }

    return (
      <div className="App">
          <h1>
            The winner of Super Bowl LIII will be...
          </h1> 
          <div>
            <p className="Link" onClick={() => this.setState({ showResults: true})}> 
              Click here to find out 
            </p>
          
            <img src ={winnerLogo}/>
            <h3> {winnerText} </h3>
          </div>   
      </div>
    );
  }
}

export default App;
