import React, { Component } from 'react';
import {combineReducers, createStore} from 'redux';
import {connect} from 'react-redux';
import style from "./css/bootstrap.min.css";
import Header from './components/header';
import Logo from './components/logo';
import Content from './components/image_content';
import ActionBar from './components/action_bar';
import store from './index.js'

class App extends Component {

  likeHandler = () => {
      console.log(store.getState())
  }
  render() {
    return (
      <div className="app-container">
        <Logo />
        <Header
          userName={this.props.userName}
          date={this.props.date}
          desc={this.props.desc}
        />
        <Content
          header={this.props.header}
          desc={this.props.desc}
          userName={this.props.userName}
          footer={this.props.footer}
        />
        <ActionBar liked={this.props.liked} likeHandler={this.likeHandler}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    liked: state.liked,
    userName: state.userName,
    date: state.date,
    desc: state.desc,
    header: state.header,
    footer: state.footer,
    image_id: state.image_id
  }
}

export default connect(mapStateToProps)(App);
