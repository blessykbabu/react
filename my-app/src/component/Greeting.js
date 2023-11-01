// clas component

import React ,{Component} from "react";

class Greeting extends Component{
    render(){
    return <h1>Hello  {this.props.name},welcome to react from class components</h1>;
    

}
}
export default Greeting;