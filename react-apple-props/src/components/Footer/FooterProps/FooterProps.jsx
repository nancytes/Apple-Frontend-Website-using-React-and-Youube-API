// import React, { Component } from 'react'

// export default class FooterProps extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
// import React, { Component } from "react";

// export default class FooterProps extends Component {
//   render() {
//     const { title1, links1, title2, links2 } = this.props;
//     return (
//       <footer>
//         <div className="footer-links-wrapper row">
         
//             <div className="links-wrapper-1 col-sm-12 col-md">
//               <h3>{this.props.title}</h3>
//               <ul>
//                 {this.props.links.map((link, index) => (
//                   <li key={index}>
//                     <a href={link.url}>{link.text}</a>
//                   </li>
//                 ))}
//               </ul>
              
//             </div>
//             <div className="links-wrapper-2 col-sm-12 col-md">
//         <h3>{title1}</h3>
//         {links1 && (
//           <ul>
//             {links1.map((link, index) => (
//               <li key={index}>
//                 <a href={link.url}>{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         )}
//         <h3>{title2}</h3>
//         {links2 && (
//           <ul>
//             {links2.map((link, index) => (
//               <li key={index}>
//                 <a href={link.url}>{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//         </div>
//       </footer>
//     );
//   }
// }



import React, { Component } from "react";

export default class FooterProps extends Component {
  render() {
    const { title1, links1, title2, links2 } = this.props;
    return (
      <footer>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>{title1}</h3>
            {links1 && (
              <ul>
                {links1.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>{title2}</h3>
            {links2 && (
              <ul>
                {links2.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </footer>
    );
  }
}
