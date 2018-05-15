import React, { Component } from 'react';
import Redux from 'redux';
import arrow from '../img/arrow_down.png';

// define img_desc in Redux
class Header extends Component{

  render(){
    return (
          <div className="header userinfo">
            <div className="inline-info">
              <h2>{this.props.userName}</h2>
              <p className="grey grey-username">@{this.props.userName}</p>
              <p className="grey grey-date">{this.props.date}</p>
            </div>
            <div className="image-info">
              {this.props.desc.slice(0, this.props.desc.length / 2)}
            </div>
            <div className="drop-down">
              <img src={arrow} alt="" />
            </div>
          </div>
    )
  }
}
export default Header;
