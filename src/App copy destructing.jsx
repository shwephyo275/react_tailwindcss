//Destructiong

// const colors = ['red', 'green', 'blue']

// const [r, g, b] = colors

const[r, g, b] = ['red', 'green', 'blue']

console.log(g)

function App() {
  return <Air name="Koko" age="23" address="No.12" />
}

function Air({name, age, address}) {
  return (
    <h1>
      My name is {name} and age is {age}, my address is {address}
    </h1>
  );
}


export default App;