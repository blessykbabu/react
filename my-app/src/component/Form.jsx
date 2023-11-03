
import {useState} from "react"
function Parentcomponent(){
    const[dataTodisplay,setDataToDisplay]=useState('')
    const handlesubmit=(data)=>{
        setDataToDisplay(data)
    }
    return(
        <div>
            <FormComponent onSubmit={handlesubmit}/>
            <DisplayComponet displayData={dataToDisplay}/>
        </div>
    )
}
export default ParentComponet