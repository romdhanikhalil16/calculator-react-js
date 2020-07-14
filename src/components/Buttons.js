import React, { Component } from 'react';
import * as math from 'mathjs'
import './Css.css'
import { string } from 'mathjs';

class Buttons extends Component {
    constructor() {
        super();
        this.state= {
         result : '' ,
         equation : '' ,
         store : '',

        }
    }

buttonPressed=(number)=>{
  const test = (this.state.equation === '0') ? string(number.target.value) : (this.state.equation + number.target.value)
    this.setState({
        equation : test  
    })
}

operations = (op) =>{
   if(op.target.value === "="){
       this.setState({
        result : eval(this.state.equation),
        equation : eval(this.state.equation),
        store: eval(this.state.equation),
       
       })}
   else { if(op.target.value === 'C'){
         
        this.setState({
            result : '',
           equation : '0',
       })
   }else if(op.target.value === 'ANS'){

    return this.setState({
      equation : this.state.store
    })
   }else if(op.target.value === 'X²'){                      
    this.setState({
        result : Math.pow(this.state.equation ,2 ) ,
        equation :Math.pow(this.state.equation ,2)
       })
   }else if(op.target.value === 'sqrt'){
    this.setState({
        result : Math.sqrt(this.state.equation  ) ,
        equation :Math.sqrt(this.state.equation)
       })
   }
   
   
   else if(op.target.value === 'CE'){                         
    
   var fin = (this.state.equation.length > 1) ? (this.state.equation.slice(0,-1)) : ('0')

       this.setState({
           equation : fin
       })
   
   }else if(op.target.value === '.'){
       if(this.state.equation.indexOf('.') === -1){
        this.setState({
            equation : this.state.equation + op.target.value
     })
       }
   }
   
   else{

       this.setState({
        equation : this.state.equation + op.target.value

       })
   }
}}

               


    render() { 
        return ( 
            <div className="calculator card">

               <h1>Calculator</h1>
               <input type='text' className='input'  value={this.state.equation} />
                   <p>{this.state.getEquation}</p>
                <table class='table-borderless'>
                 <tr>

                      <button class="btn btn-light waves-effect row1"  onClick={this.operations} value='ANS' >ANS</button>
                      <button class="btn btn-light waves-effect row1"  onClick={this.operations} value='X²' >X²</button>
                      <button class="btn btn-light waves-effect row1"  onClick={this.operations} value='CE' >CE</button>
                      <button class="btn btn-light waves-effect row1"  onClick={this.operations} value='sqrt' >sqrt</button>
                 </tr>
         
                   <tr >
                <button class="btn btn-light waves-effect btnLarge" value="7" onClick={this.buttonPressed}>7</button> 
                <button  class="btn btn-light waves-effect btnLarge"value="8" onClick={this.buttonPressed}>8</button>
                <button class="btn btn-light waves-effect btnLarge" value="9"onClick={this.buttonPressed}>9</button>
                <button class="btn btn-danger largeurFois" value='C' onClick={this.operations}>C</button>

                    </tr>
                   
                    <tr>
                <button  class="btn btn-light waves-effect btnLarge" value="4"onClick={this.buttonPressed}>4</button>
                <button  class="btn btn-light waves-effect btnLarge" value="5" onClick={this.buttonPressed}>5</button>
                <button  class="btn btn-light waves-effect btnLarge" value="6"onClick={this.buttonPressed}>6</button>
                <button class="operator btn btn-info largeurFois" value="-"onClick={this.operations}>-</button>
                    </tr>
                   
                    <tr>
                <button  class="btn btn-light waves-effect btnLarge" value="1"onClick={this.buttonPressed}>1</button>
                <button  class="btn btn-light waves-effect btnLarge" value="2"onClick={this.buttonPressed}>2</button>
                <button  class="btn btn-light waves-effect btnLarge" value="3" onClick={this.buttonPressed}>3</button>
                <button class="operator btn btn-info largeurFois" value="+" onClick={this.operations}>+</button>
                    </tr>
                    
                    <tr>
                <button  class="btn btn-light waves-effect btnLarge" value="0"onClick={this.operations}> 0</button>
                <button class="largeurBas operator btn btn-info " value="/" onClick={this.buttonPressed}>/</button>
                <button  class="largeurBas operator btn btn-info " value="*" onClick={this.operations}>*</button>
               <button class="largeurBas operator btn btn-info " value= "(" onClick={this.operations}>(</button>
               <button class="largeurBas operator btn btn-info " value= ")" onClick={this.operations}>)</button>
               <button class="largeurBas operator btn btn-info " value= "." onClick={this.operations}>.</button>
               <button class="egal operator btn btn-info " value= "=" onClick={this.operations}>=</button>

                </tr>
                
               
                
                </table>
            </div>
         );
    }
}
 
export default Buttons;