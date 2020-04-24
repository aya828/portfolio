import React from "react";

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          {this.props.body}
        </div>
      </div>
    );
  }
} 
// export default function Section( title, subtitle, id ) {

//   return (
//     <div className="section">
//       <div className="section-content" id={id}>
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//       </div>
//     </div>
//   );
// }

export default Section;