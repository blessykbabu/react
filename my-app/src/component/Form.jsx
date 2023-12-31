
import React, { useState } from 'react';


// FormComponent.js
function FormComponent({ onSubmit }) {
  // Initialize the state for input data
  
  const[lname,setlname] = useState("");
  const[fname,setfname] = useState("");
  const[email,setemail] = useState("");
  const[uname,setuname] = useState("");
  const[password,setpassword] = useState("");


  // Handle input change and update the inputData state
  
  
  

  // Handle form submission and call the onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname,lname,email,uname,password);
    // onSubmit(inputData);

};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fname}
        name="fname"
        placeholder="First Name"
        onChange={(e)=>{setfname(e.target.value)}}
      />
      <input 
      type="text"
      value={lname}
      name="lname"
      placeholder="Last Name"
      onChange={(e)=>{setlname(e.target.value)}}
      />
      <input
      type="text"
      value={email}
      name="email"
      placeholder="email"
      onChange={(e)=>{setemail(e.target.value)}}
      />
      <input
      type="text"
      value={uname}
      name="uname"
      placeholder="username"
      onChange={(e)=>{setuname(e.target.value)}}
      />
      <input 
      type="text"
      value={password}
      name="password"
      placeholder="password"
      onChange={(e)=>{setpassword(e.target.value)}}
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
  <div>{displayData}
  

  </div>
  </>
  );
}

function Table(){
    return (
      <>
       <table>
        <thead>
    <tr>
        <th>first name</th>
        <th>last name</th>
        <th>email</th>
        <th>user name</th>
        <th>password</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
      </>
    )
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