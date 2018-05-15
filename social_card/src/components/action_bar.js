import React, { Component } from 'react';

// define img_desc in Redux
function ActionBar(props){
    return (
      <div className="action-bar">
        <i className="glyphicon glyphicon-comment"><a className="number"></a>20</i>
        <i className="glyphicon glyphicon-retweet" style={{color:'green'}}><a className="number">20</a></i>
        <i onClick={props.likeHandler} clicked={props.liked} className={(props.liked ? "glyphicon glyphicon-heart" : "glyphicon glyphicon-heart-empty") + " like"} style={{color:'red'}}><a className="number">20</a></i>
        <i className="glyphicon glyphicon-envelope"><a className="number">20</a></i>
      </div>
    )
  }
export default ActionBar;
