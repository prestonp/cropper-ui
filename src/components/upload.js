import React, { Component } from 'react';
import Crop from './crop';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { evtSrc: null };
  }

  componentDidMount() {
    const { baseUrl, file } = this.props;
    var evtSrc = new EventSource(`${baseUrl}/files/${file.id}`);
    this.setState({ evtSrc });

    evtSrc.onmessage = (e) => {
      try {
        this.props.setFile(JSON.parse(e.data));
      } catch(e) {
        // TODO better error handling
        console.error('Could not parse upload data', e);
      }
    }
  }

  handleReturnBtn = (e) => {
    this.props.setView(Crop);
  }

  renderInProgress() {
    return (
      <div>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
        <p>Uploading...</p>
      </div>
    );
  }

  renderComplete() {
    return (
      <div className="info">
        <label>URL</label>
        <a href={this.props.file.url}>{this.props.file.url}</a>
        <button className="btn" onClick={this.handleReturnBtn}>Crop another video</button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <section>
          { this.props.file.url ? this.renderComplete() : this.renderInProgress() }
        </section>
      </div>
    );
  }
}
