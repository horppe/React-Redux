import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(){
    super();
    this.state = {
      delete : false
    }
  }
  enableCheck(event){
    var checkBox = event.target.childNodes.forEach((child) => {
        if (child.type == 'checkbox') {
          child.checked = !child.checked;
          alert(child.delete);
        }
    })

  }


  render() {

    return (
      (
        <p class="item" onClick={this.enableCheck}>
          <input type="checkbox" name="delete" checkKey={this.props.checkKey} onChange={this.props.checkHandler}  />
           <span> {this.props.text} </span>
        </p>
      )
    );
  }
}

export default TodoItem;
