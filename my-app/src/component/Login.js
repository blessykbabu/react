import React ,{useState}from "react"
function Login(){
    const[IsLoggedin,setLoggedin]=useState(true)
// const change = ()=>{
//     if(IsLoggedin == true){
//         setLoggedin(false)
//     }
//     else{
//         setLoggedin(true)
//     }
// }

let content;
if(IsLoggedin){
    content=<p>welcome!!!!!! </p> 
}
else{
    content=<p>please log in</p>
}



const change =()=>{
    if(IsLoggedin == true){
                setLoggedin(false)
            }
            else{
                setLoggedin(true)
            }
}
    return(
        <div>
             
            {content}

            <button onClick={change}> change</button>
        </div>
    )
}
export default Login



