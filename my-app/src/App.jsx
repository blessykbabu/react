import Greeting from "./component/Greeting"
import Greeting1 from "./component/Greeting1"
import Counter from "./component/Counter";


function App() {
  return ( 
   <>
   <Greeting name="meena" />
    <Greeting1 name="balu" age="22"/>
    <Counter/>
   </>
  );
}

export default App;
