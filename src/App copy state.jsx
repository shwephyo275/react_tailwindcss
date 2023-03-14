import { useState } from "react";

function App() {
//step1
  const data = ['Mango', 'Apple', 'Orange', 'Coconut', 'Lemon']
//step2
const [bobo, setBobo] = useState([
  { id: 1, name: "Mango", color: "green" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Apple", color: "red" },
])


// console.log(bobo);
// setBobo(200);
// console.log(bobo);

  return (
    <div>
      {/* step3 */}
     {bobo.map( (b) => {
      return (
        <h1 key={b.id}>
          {b.name} 
          color: {b.color}
        </h1>
      )
     } )}
    </div>
  );
}

export default App; 