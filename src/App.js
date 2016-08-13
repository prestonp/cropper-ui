import React, { Component } from 'react';
import './css/react-input-range.css';
import './App.css';
import ImgBackground from './components/img-background';

import Crop from './components/crop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      duration: 1,
      current: 0,
      videoId: 'kOkQ4T5WO9E',
      view: Crop,
      file: null
    };
  }

  setFile = (file) => {
    this.setState({ file });
  }

  setView = (view) => {
    this.setState({ view });
    return this;
  }

  setDuration = (duration) => {
    this.setState({ duration, end: duration });
    return this;
  }

  setCurrent = (current) => {
    this.setState({ current });
    return this;
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

  getFilePath = () => {
    const { start, end, videoId } = this.state;
    const baseUrl = this.props.baseUrl;
    return `${baseUrl}/${videoId}?start=${start}&duration=${end - start}`;
  }

  render() {
    const View = this.state.view;

    return (
      <main>
        <ImgBackground url={this.state.videoId} />
        <View {...this.state} {...this.props}
          onVideoIdChange={this.handleVideoIdOnChange}
          onValuesChange={this.handleValuesChange}
          getFilePath={this.getFilePath}
          setDuration={this.setDuration}
          setCurrent={this.setCurrent}
          setView={this.setView}
          setFile={this.setFile} />
      </main>
    );
  }
}

export default App;
