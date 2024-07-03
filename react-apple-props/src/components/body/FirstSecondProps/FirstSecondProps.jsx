import React, { Component } from "react";

export default class FirstSecondProps extends Component {
  render() {
    return (

    <div>
        <div class="new-alert">{this.props.new}</div>
        <div class="title-wraper bold black">{this.props.name}</div>
        {this.props.description && (
          <div class="description-wrapper black">{this.props.description}</div>
        )}
        {this.props.price && (
          <div class="price-wrapper grey">{this.props.price}</div>
        )}
        <div class="links-wrapper">
          <ul>
            <li>
              <a href={this.props.link}>{this.props.learnmore}</a>
            </li>
            <li>
               <a href={this.props.link2}>{this.props.order}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
