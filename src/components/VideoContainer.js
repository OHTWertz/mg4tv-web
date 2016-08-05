import React, { Component } from 'react';

class VideoContainer extends Component {
  render() {
    return (
      <div>
        <video width={this.props.videoWidth.toString()} controls>
          {this.props.videoSources.map((videoSource, index) => (
            <source src={videoSource} key={index} />
          ))}
        </video>
      </div>
    );
  }
}

VideoContainer.propTypes = {
  videoWidth: React.PropTypes.number.isRequired,
  videoSources: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
}

export default VideoContainer;