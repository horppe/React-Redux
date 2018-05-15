import React, { Component } from 'react';
import Redux from 'redux';
import image from '../img/image.jpg';
import logo from '../img/dev_logo.png';
import NamePic from './name_pic';
import ImageFullInfo from './image_full_info'

// define img_desc in Redux
class Content extends Component{

  render(){
    return (
      <div className="content">
        <div className="content-image"><img src={image} alt="" /></div>
        <div className="content-logo"><img src={logo} alt="" /></div>
        <div className="content-name"> </div>
        <NamePic
          userName={this.props.userName}
        />
        <ImageFullInfo
          header={this.props.header}
          desc={this.props.desc}
          footer={this.props.footer}
        />
      </div>
    )
  }
}
export default Content;
