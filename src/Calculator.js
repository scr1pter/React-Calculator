import React from 'react';
import './Calculator.scss';
import Output from './Output';
import Pad from './Pad';

class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.state={
        isOutput: "0", // auto einai to trexwn output pou exw sthn o9onh tou calculator mou
        decimalIsActive:false,
        operatorIsPressed:false 
      }
    }
    
    whenIsClicked = (keyPressed) => {
      let isOutput = this.state.isOutput
      let operatorIsPressed = this.state.operatorIsPressed
      
      switch(true){
          case keyPressed === "CE":
            const newNumber = isOutput.slice(0,isOutput.length-1)
            isOutput = newNumber // prwta diagrafw to teleutaio stoixeio tou output sthn o9onh eite einai ari8mos eite operator kai meta katw elegxw an to teleutaio auth th stigmh einai operator h oxi.an einai operator tote exei path8ei operator ara operatorIsPressed=true alliws to teleutaio stoixeio den einai operator kai operatorIsPressed=false
            if (isOutput[isOutput.length-1]==="*" || isOutput[isOutput.length-1]==="/" || isOutput[isOutput.length-1]==="+" || isOutput[isOutput.length-1]==="-") {
            operatorIsPressed=true
            }
            else {
              operatorIsPressed=false
            }
          break;
          case keyPressed === "0" || keyPressed === "1" || keyPressed === "2" ||
               keyPressed === "3" || keyPressed === "4" || keyPressed === "5" ||
               keyPressed === "6" || keyPressed === "7" || keyPressed === "8" ||
               keyPressed === "9" :
            if(this.state.isOutput!=="0"){
              isOutput += keyPressed
              operatorIsPressed = false
            }
            else{
              isOutput = keyPressed
            }
          break;
          case keyPressed === "C": 
            isOutput = "0"
            operatorIsPressed = false
            this.setState({decimalIsActive:false})
          break;
          case keyPressed === "=":
            isOutput = eval(isOutput)
            isOutput = Math.round(isOutput*1000000)/1000000
            this.setState({decimalIsActive:true})
          break;
          case keyPressed === ".":
            if(!this.state.decimalIsActive){ 
              isOutput += "."
              this.setState({decimalIsActive:true})
            }
          break;
          case keyPressed === "+" || keyPressed === "-" || keyPressed === "*" || keyPressed === "/" :
            if(!this.state.operatorIsPressed){ // otan einai true tote xerw pws exei path8ei hdh ena operator, an einai false tote den exei path8ei operator kai sunexizw na kanw to isOutput :to prohgoumeno noumero pou path8hke kai to operator dipla tou px 9+. Auta einai ola strings opote ena string sun to allo apla ta bazei dipla dipla
              isOutput += keyPressed
              operatorIsPressed = true // an path8ei amesws meta kai allo operator tote 8a bei sthn else akribws apo katw
              this.setState({decimalIsActive:false})
            }
            else{ // edw auto pou kanw einai an exw epileksei ena operator hdh tote borw na ton allaksw dhladh na an exw 9+ na to kanw 9* h 9/ h 9-
            if(keyPressed==="-" && (isOutput[isOutput.length-1]==="*" || isOutput[isOutput.length-1]==="/")) { 
              isOutput += keyPressed
            }
            else if((keyPressed==="+" || keyPressed==="*" || keyPressed==="/") && isOutput[isOutput.length-1]==="-") {
            const newNumber = isOutput.slice(0,isOutput.length-2)
            isOutput = newNumber
            isOutput += keyPressed
            }
          }
          break;
      }
      this.setState({operatorIsPressed})
      this.setState({isOutput})
    }
    
    render(){  
      return(
       <div>
          <div className="calculator">
            <Output isOutput={this.state.isOutput}/>
            <Pad whenIsClicked={this.whenIsClicked}/>
          </div>
       </div>
      );
    }
  }

  export default Calculator;