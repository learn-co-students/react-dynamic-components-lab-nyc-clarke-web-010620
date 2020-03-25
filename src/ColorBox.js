import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    function lowerOpacity(props){
      return props - 0.1
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity > 0.2 ?  
        <div className="color-box" style={{opacity: this.props.opacity}}>
            {console.log(this.props.opacity)}
            <ColorBox opacity={lowerOpacity(this.props.opacity)} />
        </div> : null}
      </div>
    )
  }

}

