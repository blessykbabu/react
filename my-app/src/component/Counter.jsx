import React,{Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props);//call parent
        this.state={
            count :0,
            c:4
        };
    }
    increment =() =>{
        this.setState({count:this.state.count+1})
        
    };
    decrement =() =>{
        this.setState({c:this.state.c-1})
        
    };
    render(){
        return(
            <>
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>increment</button>
            </div>
            
             <div>
             <p>Count : {this.state.c}</p>
             <button onClick={this.decrement}>decrement</button>
         </div>
         </>
        )
    }
}
export default Counter;