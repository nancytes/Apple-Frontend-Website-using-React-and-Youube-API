import React, { Component } from 'react'
import FirstSecondProps from '../FirstSecondProps/FirstSecondProps'

export default class FirstSection extends Component {
  render() {
    return (
        <section className="first-hightlight-wrapper">
          <div className="container">
            <FirstSecondProps new="New" name="iPad Pro" link="/learn-more" learnmore="Learn More" link2="/order" order="Order" />
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
              <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
            </div>
          </div>
        </section>
    )
  }
}