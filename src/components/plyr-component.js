import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import plyr from 'plyr';
import '../css/plyr.css';

class PlyrComponent extends React.Component {
  static propTypes = {
    'options': PropTypes.object,    // this is an options object from the docs
    'setDuration': PropTypes.func   // function(time) for updating video length
  }

  componentDidMount () {
    this.el = ReactDOM.findDOMNode(this);
    plyr.setup(this.el, this.props.options);

    this.el.addEventListener('ready', () => {
      this.props.setDuration(this.el.plyr.embed.getDuration());
    });

    this.el.addEventListener('timeupdate', () => {
      if (this.el.plyr.embed.getCurrentTime() >= this.props.end) {
        this.el.plyr.embed.pauseVideo();
      }
    });
  }

  componentWillUnmount () {
    this.el.plyr.destroy();
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.videoId !== this.props.videoId) {
      this.el.plyr.source({
        type: 'video',
        sources: [{
          src: nextProps.videoId,
          type: 'youtube'
        }]
      });
    }

    if (nextProps.start !== this.props.start) {
      this.reset(nextProps.start);
    }
  }

  reset (time) {
    this.el.plyr.seek(time);
    this.el.plyr.play();
  }

  render () {
    return (
      <div className='js-plyr plyr'>
        <div data-type="youtube" data-video-id={this.props.videoId}></div>
      </div>
    );
  }
}

export default PlyrComponent;
