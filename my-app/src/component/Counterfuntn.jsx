import React ,{useState}from "react";
function Counterfunctn(props){
    const [count, setCount]=useState(props.intialvalue);    //intial value stored in count variable  .this line for hooks  .instead of this we give "0" in useState
    const increment=()=>{
         setCount(count+1)
    }


    return(
        <div>
            <p>
                count:{count}
            </p>
            <button onClick={increment}>
                increment
            </button>
        </div>
    )
}
export default Counterfunctn