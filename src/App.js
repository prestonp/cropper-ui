import React, { Component } from 'react';
import './css/react-input-range.css';
import './App.css';

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
      view: Crop
    };
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
      <View {...this.state} {...this.props}
        onVideoIdChange={this.handleVideoIdOnChange}
        onValuesChange={this.handleValuesChange}
        getFilePath={this.getFilePath}
        setDuration={this.setDuration}
        setCurrent={this.setCurrent} />
    );
  }
}

export default App;
