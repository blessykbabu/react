
import React, { useState } from 'react';


// FormComponent.js
function FormComponent({ onSubmit }) {
  // Initialize the state for input data
  
  const[inputarr,setInputarr]=useState([])
  const [inputData, setInputData] = useState(
    {
        fname:"",
        lname:"",
        email:"",
        uname:"",
        password:""
    }
  );


  // Handle input change and update the inputData state
  const handleInputChange = (e) => {
    setInputData({...inputData,[e.target.name]:e.target.value});

  
  }
  // Handle form submission and call the onSubmit function
  let{fname,lname,email,uname,password}=inputData
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(inputData);
    setInputarr([...inputarr,{fname,lname,email,uname,password}])
    // console.log(inputarr)
    console.log(inputData)
    setInputData({fname:",",lname:"",email:"",uname:"",password:""})

};

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData.fname}
        name="fname"
        placeholder="First Name"
        onChange={handleInputChange}
      />
      <input 
      type="text"
      value={inputData.lname}
      name="lname"

      placeholder="Last Name"
      onChange={handleInputChange}
      />
      <input
      type="text"
      value={inputData.email}
      name="email"
      placeholder="email"
      onChange={handleInputChange}
      />
      <input
      type="text"
      value={inputData.uname}
      name="uname"
      placeholder="username"
      onChange={handleInputChange}
      />
      <input 
      type="text"
      value={inputData.password}
      name="password"
      placeholder="password"
      onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}





// DisplayComponent.js
function DisplayComponent({ displayData }) {
  // Display the data received via props
  return (
    <>
  <div>
  <table>
    <tr>
    <td>Fist Name</td>
    <td>Last Name</td>
    <td>email</td>
    <td>user name</td>
    <td>password</td>
    </tr>
  </table>

  </div>
  </>
  );
}


// ParentComponent.js
function ParentComponent() {
  // Initialize the state for data to display
  const [dataToDisplay, setDataToDisplay] = useState('');

  // Handle form submission and update dataToDisplay state
  const handleSubmit = (data) => {
    setDataToDisplay(data);
  };

  return (
    <div>
      {/* Render FormComponent and pass onSubmit function */}
      <FormComponent onSubmit={handleSubmit} />

      {/* Render DisplayComponent and pass dataToDisplay as a prop */}
      <DisplayComponent displayData={dataToDisplay} />
    </div>
  );
}

export default ParentComponent;