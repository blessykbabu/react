import React ,{Component,Fragment} from "react";

function Greeting1(props){
    //props pass data from parent to child
    
    return (
        <Fragment>
    <h1>Hello  {props.name},welcome to react from functional components</h1>
    <p>age : {props.age}</p>
    </Fragment>
    )

}

export default Greeting1