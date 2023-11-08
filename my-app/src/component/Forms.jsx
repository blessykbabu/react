
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
    setInputData({fname:inputData.fname,lname:inputData.lname,email:inputData.email,uname:inputData.uname,password:inputData.password})

};

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData.fname}
        name="fname"
        placeholder="First Name"
        onChange={handleInputChange}
      /><br></br>
      <input 
      type="text"
      value={inputData.lname}
      name="lname"

      placeholder="Last Name"
      onChange={handleInputChange}
      /><br></br>
      <input
      type="text"
      value={inputData.email}
      name="email"
      placeholder="email"
      onChange={handleInputChange}
      /><br></br>
      <input
      type="text"
      value={inputData.uname}
      name="uname"
      placeholder="username"
      onChange={handleInputChange}
      /><br></br>
      <input 
      type="text"
      value={inputData.password}
      name="password"
      placeholder="password"
      onChange={handleInputChange}
      /><br></br>
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
  <thead>
    <tr>
    <th>Fist Name</th>
    <th>Last Name</th>
    <th>email</th>
    <th>user name</th>
    <th>password</th>
    </tr>
  </thead>
  <tbody>
   {displayData.fname}
  </tbody>
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