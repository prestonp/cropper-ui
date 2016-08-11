import React, { Component } from 'react';
import PlyrComponent from './plyr-component';
import { formatSecs } from '../utils';
import InputRange from 'react-input-range';
import Upload from './upload';

export default class Crop extends Component {
  handleRewindOnClick = (e) => {
    this.refs.plyr.reset(this.props.start);
  }

  handleUploadClick = (e) => {
    // todo request crop
    this.props.setView(Upload);
    // todo request SSE polling
  }

  render() {
    return (
      <div>
        <div className="container">
          <section>
            <label> Video ID
            <input className="input" type="text" onChange={this.props.onVideoIdChange} value={this.props.videoId}></input>
            </label>
          </section>
        </div>
        <div className="container">
          <PlyrComponent {...this.props} setDuration={this.props.setDuration} setCurrent={this.props.setCurrent} ref={'plyr'}/>
          <section>
            <div className="info">
              <label>Start <div>{formatSecs(this.props.start)}</div></label>
              <label>End <div>{formatSecs(this.props.end)}</div></label>
              <label>Current <div>{formatSecs(this.props.current)}</div></label>
              <label>Duration <div>{formatSecs(this.props.end-this.props.start)}</div></label>
            </div>
          </section>
        </div>
        <div className="controls">
          <button className="btn" onClick={this.handleRewindOnClick}>Rewind</button>
          <div className="cropper-slider">
            <InputRange
              maxValue={this.props.duration}
              minValue={0}
              value={{min: this.props.start, max: this.props.end}}
              onChange={this.props.onValuesChange}
              formatLabel={formatSecs}
            />
          </div>
          <button className="btn" onClick={this.handleUploadClick}>Crop</button>
        </div>
      </div>
    );
  }
}
