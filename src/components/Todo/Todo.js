import React, { Component } from 'react';
import './Todo.css';

import Type from "../Type/Type.js"
import Option from "../Option/Option.js"
import Item from "../Item/Item.js"

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: [],
      left: 0,
      type: "All",
      msg: ""
    };
    this.typeIn = this.typeIn.bind(this);
    this.changeFinished = this.changeFinished.bind(this);
    this.changeType = this.changeType.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.delItem = this.delItem.bind(this);
    this.filterItem = this.filterItem.bind(this);
  }

  typeIn(e) {
    e.stopPropagation();
    if(e.keyCode === 13) {
      let value = e.target.value;
      let left = this.state.left;
      e.target.value = "";
      if((left+1) >= 14){
        this.setState({msg: "立这么多flag等着被打脸？？？"});
        return;
      }
      this.setState({
        info: [{
          id: Math.random()*100, 
          content: value,
          finished: false
        }].concat(this.state.info),
        left: ++left
      });
    }
  }

  changeFinished(id, e) {
    e.stopPropagation();
    var l = this.state.left;
    var arr = [].concat(this.state.info);
    if(e.target.checked) {
      l = l -1;
    }else{
      l = l + 1;
    }
    for(let i = 0;i<arr.length;i++) {
      if(arr[i].id === id) {
        arr[i].finished = !arr[i].finished;
      }
    }
    this.setState({info: arr, left: l});
  }

  changeType(e) {
    if(!e.target.getAttribute("data-type")){
      let type = e.currentTarget.getAttribute("data-type");
      document.getElementById(type).setAttribute("class", "");
      e.currentTarget.setAttribute('data-type', this.state.type);
      e.target.setAttribute('class', 'on');
      this.setState({type: e.target.innerHTML});
    }
  }

  clearCompleted(e) {
    let info = [].concat(this.state.info);
    let arr = [];
    for(let i in info) {
      if(!info[i].finished) {
        arr.push(info[i]);
      }
    }
    this.setState({info: arr});
  }

  delItem(id) {
    let info = [].concat(this.state.info);
    let arr = [];
    let l = this.state.left;
    for(let i = 0;i<info.length;i++) {
      if(info[i].id !== id) {
        arr.push(info[i]);
      }
    }
    this.setState({info: arr, left: --l});
  }

  filterItem(type) {
    var items = [];
    var that = this;
    switch(type){
      case "Active":
        items = that.state.info.map(function(item, index){
          if(!item.finished) {
            return <Item key={index} info={item} changeFinished={that.changeFinished} delItem={that.delItem} />;
          }
        });
        break;
      case "Completed":
        items = that.state.info.map(function(item, index){
          if(item.finished) {
            return <Item key={index} info={item} changeFinished={that.changeFinished} delItem={that.delItem} />;
          }
        });
        break;
      default:
        items = that.state.info.map((item, index) => <Item key={index} info={item} changeFinished={that.changeFinished} delItem={that.delItem} />);
        break;
    }
    return items;
  }

  render() {
    let items = this.filterItem(this.state.type);
    if(this.state.msg) {
      window.alert(this.state.msg);
      this.setState({msg: ""});
    }
    console.log(this.state.left+"|"+this.state.type+"|"+JSON.stringify(this.state.info));

    return (
      <div className="todo">
        <div className="input-wrapper">
          <Type typeIn={this.typeIn} />
        </div>
        <div className="item-wrapper">
          {items}
        </div>
        <div className="opt-wrapper">
          <Option left={this.state.left} changeType={this.changeType} type={this.state.type} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default Todo;
