function App() {
  return <Fruit name="You have to pay...." />
}


function Fruit(props) {
  return <Bell gg={props.name} />
}


function Bell(props) {
  return <h1>{props.gg}</h1>
} 

export default App;