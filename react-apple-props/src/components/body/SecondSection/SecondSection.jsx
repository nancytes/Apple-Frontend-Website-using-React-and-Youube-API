import React, { Component } from 'react'
import FirstSecondProps from '../FirstSecondProps/FirstSecondProps'

export default class SecondSection extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <div className="container">
          <FirstSecondProps
            new="New"
            name="MacBook Air"
            description="Twice the speed. Twice the storage."
            price="From $999."
            link="/learn-more"
            learnmore="Learn more"
            link2="/buy"
            order="Buy"
          />
        </div>
      </section>
    )
  }
}
