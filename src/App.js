import React, { Component } from 'react';
import logo from './logo.svg';
import LDClient from 'ldclient-js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showResults: false,
      featureFlag: null // Initially made a featureFlags hash, however keeping it as just a single featureFlag variable since I'm only using one feature flag in this exercise
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
    this.setState({ featureFlag: this.ldclient.variation('default-super-bowl-winner')}) // set the state of featureFlag variable to be whichever corresponding targeted user value returns from LaunchDarkly feature flag
  }

  render() {
    let winnerLogo = undefined
    let winnerText = undefined
    
    if(this.state.featureFlag) {
      if(this.state.showResults)  { // If the featureFlag variable returns true and the text has been clicked, show the Patriots' logo and text
        winnerLogo = "http://evensondesign.com/wp-content/uploads/2013/04/patriots_a_logo_800x300.jpg"
        winnerText = "The New England Patriots!"
      }
    } else if (!this.state.featureFlag) {
        if(this.state.showResults) { // If the featureFlag variable returns false and the text has been clicked, show the Rams' logo and text
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
            <p className="Link" onClick={() => this.setState({ showResults: true})}> {/* used showResults to necessary logic to assign winnerLogo and winnerText values*/}
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
