import React, { Component } from 'react';
import Redux from 'redux';
import userpic from '../img/user_pic.jpg'

// define img_desc in Redux
class NamePic extends Component{

  render(){
    return (
      <div className="name_pic">
        <h1 className="user-name-card"> {this.props.userName} </h1>
        <img className="user-img-card" src={userpic} alt="" />
      </div>
    )
  }
}
export default NamePic;
