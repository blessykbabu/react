
import React, { useState } from 'react';


// FormComponent.js
function FormComponent({ onSubmit }) {
  // Initialize the state for input data
  const [inputData, setInputData] = useState('');
  const [lName, setLname] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');


  // Handle input change and update the inputData state
  const handleInputChange = (e) => {
    setInputData(e.target.value);

  };
  const handleLname = (e) => {
    setLname(e.target.value);

  };
  const handlemail = (e) => {
    setemail(e.target.value);

  };
  const handleusername = (e) => {
    setusername(e.target.value);

  };
  const handlepassword = (e) => {
    setpassword(e.target.value);

  };

  // Handle form submission and call the onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);

};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        placeholder="First Name"
        onChange={handleInputChange}
      />
      <input 
      type="text"
      value={lName}
      placeholder="Last Name"
      onChange={handleLname}
      />
      <input
      type="text"
      value={email}
      placeholder="email"
      onChange={handlemail}
      />
      <input
      type="text"
      value={username}
      placeholder="username"
      onChange={handleusername}
      />
      <input 
      type="text"
      value={password}
      placeholder="password"
      onChange={handlepassword}
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