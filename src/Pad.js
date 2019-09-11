import React from 'react';
import './Calculator.scss';

class Pad extends React.Component{
    render(){
      return(
      <div className="Keypad">
          <button id="zero" name="0" onClick={res => this.props.whenIsClicked(res.target.name)}>0</button>
          <button id="one" name="1" onClick={res => this.props.whenIsClicked(res.target.name)}>1</button>
          <button id="two" name="2" onClick={res => this.props.whenIsClicked(res.target.name)}>2</button>
          <button id="three" name="3" onClick={res => this.props.whenIsClicked(res.target.name)}>3</button>
          <button id="four" name="4" onClick={res => this.props.whenIsClicked(res.target.name)}>4</button>
          <button id="five" name="5" onClick={res => this.props.whenIsClicked(res.target.name)}>5</button>
          <button id="six" name="6" onClick={res => this.props.whenIsClicked(res.target.name)}>6</button>
          <button id="seven" name="7" onClick={res => this.props.whenIsClicked(res.target.name)}>7</button>
          <button id="eight" name="8" onClick={res => this.props.whenIsClicked(res.target.name)}>8</button>
          <button id="nine" name="9" onClick={res => this.props.whenIsClicked(res.target.name)}>9</button>
          <button id="clear" name="C" onClick={res => this.props.whenIsClicked(res.target.name)}>C</button>
          <button id="equals" name="=" onClick={res => this.props.whenIsClicked(res.target.name)}>=</button>
          <button id="decimal" name="." onClick={res => this.props.whenIsClicked(res.target.name)}>.</button>
          <button id="add" name="+" onClick={res => this.props.whenIsClicked(res.target.name)}>+</button>
          <button id="subtract" name="-" onClick={res => this.props.whenIsClicked(res.target.name)}>-</button>
          <button id="multiply" name="*" onClick={res => this.props.whenIsClicked(res.target.name)}>*</button>
          <button id="divide" name="/" onClick={res => this.props.whenIsClicked(res.target.name)}>/</button>
          <button id="backspace" name="CE" onClick={res => this.props.whenIsClicked(res.target.name)}>CE</button>
      </div>
      );
    }
  }

export default Pad;