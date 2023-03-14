import { createContext, useContext } from "react";

const MyContext = createContext('$ 100')

function App() {
  return <Fruit name="You have to pay...." />
}


function Fruit(props) {
  return <Bell gg={props.name} />
}


function Bell(props) {
  const data = useContext(MyContext);
  return <h1>{props.gg} {data}</h1>
} 

export default App;