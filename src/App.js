import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlyrComponent from './components/plyr-component';
import { formatSecs } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      duration: 0,
      videoId: 'bTqVqk7FSmY'
    };

  }

  setDuration = (duration) => {
    this.setState({ duration });
  }

  handleVideoIdOnChange = (e) => {
    this.setState({ videoId: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input type="text" onChange={this.handleVideoIdOnChange} value={this.state.videoId}></input>
        <PlyrComponent options={{}} videoId={this.state.videoId} setDuration={this.setDuration}/>
        <dl>
          <dt>duration</dt>
          <dd>{formatSecs(this.state.duration)}</dd>
          <dt>crop start</dt>
          <dd>{formatSecs(this.state.start)}</dd>
          <dt>crop end</dt>
          <dd>{formatSecs(this.state.end)}</dd>
        </dl>
      </div>
    );
  }
}

export default App;
