import React from 'react';
import './Calculator.scss';

class Output extends React.Component{
    render(){
      return(
      <div id="display">
          {this.props.isOutput}
      </div>
      );
    }
  }

  export default Output;