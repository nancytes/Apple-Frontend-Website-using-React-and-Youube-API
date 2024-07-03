import React, { Component } from 'react'

export default class HeaderProps extends Component {
  render() {
    return (
      <>
    <li class="nav-item"><a class="nav-link js-scroll-trigger" href={this.props.link}>{this.props.name}</a></li>
         <div><li class="nav-item" ><a class="nav-link js-scroll-trigger" href={this.props.link}><img src={this.props.imgSrc} /></a></li> </div> 
        </>
        
       
    
    )
    }
    }

