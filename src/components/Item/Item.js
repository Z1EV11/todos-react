import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info
    }
    this.change = this.change.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  change(id, e) {
    let news = {id: this.state.info.id, content: this.state.info.content, finished: !this.state.info.finished}
    this.setState({info: news});
    this.props.changeFinished(id, e);
  }

  delItem(id) {
    this.props.delItem(id);
  }

  render() {

    return (
      <div className="item">
        <input className={this.props.info.id} checked={this.props.info.finished} type="checkbox" name={this.props.info.id} value={this.props.info.content} onChange={this.change.bind(this, this.props.info.id)} />
        <span className="item-content">{this.props.info.content}</span>
        <button className="item-del" onClick={this.delItem.bind(this, this.props.info.id)} >X</button>
      </div>
    );
  }
}

export default Item;
