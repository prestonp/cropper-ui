import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import plyr from 'plyr';

class PlyrComponent extends React.Component {
  static propTypes = {
    'options': PropTypes.object,  // this is an options object from the docs,
    'setDuration': PropTypes.func
  }

  componentDidMount () {
    this.el = ReactDOM.findDOMNode(this);
    plyr.setup(this.el, this.props.options);

    this.el.addEventListener('ready', () => {
      this.props.setDuration(this.el.plyr.embed.getDuration());
    });
  }

  componentWillUnmount () {
    this.player.destroy();
  }

  componentWillUpdate (nextProps, nextState) {
    if(nextProps.videoId !== this.props.videoId) {
      this.el.plyr.source({
        type: 'video',
        sources: [{
          src: nextProps.videoId,
          type: 'youtube'
        }]
      });
    }
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
