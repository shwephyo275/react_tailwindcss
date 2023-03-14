
import Footer from "./Footer";
import './main.css'

function Air({name, age, address}) {
    return (
      <div className="h1">
        <h1 style={{ color: "#fff", backgroundColor: '#007bff' }}>
        My name is {name} and age is {age}, my address is {address}
      </h1>
      <Footer />
      </div>
    );
  }

  export default Air;