import React ,{useState} from "react"

function Onchange() {
    const [data, setdata] = useState("")
    
    const change=()=>{
   
  setdata(data)
   
   
    }
    
    return (
      <div>
       
        <input type="text" name="data"  onChange={(e) => setdata(e.target.value)}/>
  
    
        <button onChange={change}>change</button> 
        <p>{data}</p>
      </div>
    );
  
  }
  export default Onchange


