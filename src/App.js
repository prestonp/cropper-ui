import React, { Component } from 'react';
import './css/react-input-range.css';
import './App.css';
import PlyrComponent from './components/plyr-component';
import ImgBackground from './components/img-background';
import { formatSecs } from './utils';
import InputRange from 'react-input-range';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      duration: 1,
      current: 0,
      videoId: 'kOkQ4T5WO9E'
    };

  }

  setDuration = (duration) => {
    this.setState({ duration, end: duration });
  }

  setCurrent = (current) => {
    this.setState({ current });
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

  handleRewindOnClick = (e) => {
    this.refs.plyr.reset(this.state.start);
  }

  getFilePath = () => {
    const { start, end, videoId } = this.state;
    const baseUrl = this.props.baseUrl;
    return `${baseUrl}/${videoId}?start=${start}&duration=${end - start}`;
  }

  render() {
    return (
      <div>
        <ImgBackground url={this.state.videoId} />
        <div className="container">
          <section>
            <label> Video ID
            <input className="input" type="text" onChange={this.handleVideoIdOnChange} value={this.state.videoId}></input>
            </label>
          </section>
        </div>
        <div className="container">
          <PlyrComponent {...this.state} setDuration={this.setDuration} setCurrent={this.setCurrent} ref={'plyr'}/>
          <section>
            <div className="info">
              <label>Start <div>{formatSecs(this.state.start)}</div></label>
              <label>End <div>{formatSecs(this.state.end)}</div></label>
              <label>Current <div>{formatSecs(this.state.current)}</div></label>
              <label>Duration <div>{formatSecs(this.state.end-this.state.start)}</div></label>
            </div>
          </section>
        </div>
        <div className="controls">
          <button className="btn" onClick={this.handleRewindOnClick}>Rewind</button>
          <div className="cropper-slider">
            <InputRange
              maxValue={this.state.duration}
              minValue={0}
              value={{min: this.state.start, max: this.state.end}}
              onChange={this.handleValuesChange}
              formatLabel={formatSecs}
            />
          </div>
          <a className="btn" href={this.getFilePath()} download={this.state.videoId + '.mp3'}>Crop</a>
        </div>
      </div>
    );
  }
}

export default App;
