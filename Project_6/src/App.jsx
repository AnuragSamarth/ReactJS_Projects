import React, { useState } from "react";
import Header from "./Components/Header/Header";
import CompA from "./Components/CompA";


function App() {

   const [data, setData] = useState("Anurag")

  return (
   <div>
    <Header></Header>
    <CompA data={data}/>

   </div>
  );
}

export default App;
