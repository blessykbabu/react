import Greeting from "./component/Greeting"
import Greeting1 from "./component/Greeting1"
import Counter from "./component/Counter"
import  Counterfunctn from "./component/Counterfuntn"
import Login from "./component/Login"


function App() {
  return ( 
   <>
   <Greeting name="meena" />
    <Greeting1 name="balu" age="22"/>
    <Counter/>
    <Counterfunctn intialvalue={1}/>
    <Login/>
   </>
  );
}

export default App;
