import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import User from "./User";
import UserDetail from "./UserDetail";
 

const App = () => {

  

  return (
    <>
      <h1>React Router Dom</h1>
      <Routes>
        <Route path="/" element={<User />} >
        </Route>
        <Route path="/detail/:id" element={<UserDetail />} >
        </Route>
      </Routes>


    </> 
  );
};

export default App;