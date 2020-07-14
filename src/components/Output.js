import React, { Component ,Fragment } from 'react';

class Output extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <p> {this.props.result} </p>  
          </Fragment>
         );
    }
}
 
export default Output;