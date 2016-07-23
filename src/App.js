import React, { Component } from 'react';
import './App.css';
import PlyrComponent from './components/plyr-component';
import { formatSecs } from './utils';
import InputRange from 'react-input-range';
import './css/react-input-range.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      duration: 1,
      videoId: 'bTqVqk7FSmY'
    };

  }

  setDuration = (duration) => {
    this.setState({ duration, end: duration });
  }

  handleVideoIdOnChange = (e) => {
    this.setState({ videoId: e.target.value });
  }

  handleValuesChange = (component, vals) => {
    this.setState({
      start: vals.min,
      end: vals.max
    });
  }

  handleCropOnClick = (e) => {
    // todo
  }

  handleResetOnClick = (e) => {
    this.refs.plyr.reset(this.state.start);
  }

  render() {
    return (
      <div>
        <div className="container">
          <section>
            <label> Video ID
            <input className="input" type="text" onChange={this.handleVideoIdOnChange} value={this.state.videoId}></input>
            </label>
          </section>
        </div>
        <div className="container">
          <PlyrComponent {...this.state} setDuration={this.setDuration} ref={'plyr'}/>
          <section>
            <InputRange
              maxValue={this.state.duration}
              minValue={0}
              value={{min: this.state.start, max: this.state.end}}
              onChange={this.handleValuesChange}
              formatLabel={formatSecs}
            />
          </section>
          <section>
            <button className="btn" onClick={this.handleCropOnClick}>Crop</button>
            <button className="btn" onClick={this.handleResetOnClick}>Reset</button>
          </section>
          <p>Crop duration: {formatSecs(this.state.end-this.state.start)}</p>
          <p>Crop start: {formatSecs(this.state.start)}</p>
          <p>Crop end: {formatSecs(this.state.end)}</p>
        </div>
      </div>
    );
  }
}

export default App;
