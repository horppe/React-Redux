import React, { Component } from 'react';
import Redux from 'redux';


// define img_desc in Redux
class ImageFullInfo extends Component{

  render(){
    return (
      <div className="image-full-info">
        <h4 className="image-info-header">{this.props.header}</h4>
        <p className="image-info-paragraph">{this.props.desc}</p>
        <footer className="grey image-info-footer">{this.props.footer}</footer>
      </div>
    )
  }
}
export default ImageFullInfo;
