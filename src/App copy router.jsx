import { Routes, Route, Link } from "react-router-dom";

import Air from "./Air";
import Hello from "./Hello";
import Hi from "./Hi";
import User from "./User";
 

const Orange = () => <h1>Orange</h1>
const Mango = () => <h1>Mango</h1>
const Error = () => <h1>Error!</h1>

function App() {



  return (
    <div>
      <h1>React Router Dom</h1>
      <Routes>
        {/* Call internal components */}
        <Route path="/" element={<Orange/>} />
       
        <Route path="*" element={<Error />} />

        {/* Call external components */}
        <Route path="/hello" element={<Hello />} />
        <Route path="/hi" element={<Hi />} />

        {/* Four User Nested Routes */}
        <Route path="user">
          <Route index  element={<User />} />
          <Route path=":userId" element={<User/>} />

          <Route path="m" element={<Mango/>} />
          <Route path="h" element={<Hi/>} />
          
        </Route>

      </Routes>
    </div> 
  )
  
}




export default App;