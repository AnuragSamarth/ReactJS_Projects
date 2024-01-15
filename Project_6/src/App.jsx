import React, { useState, createContext } from "react";
import Header from "./Components/Header/Header";
import CompA from "./Components/CompA";

const AppState = createContext();


function App() {

   const [data, setData] = useState("Anurag")

  return (
   <div>
    <AppState.Provider value={data}>
    <Header></Header>
    <CompA />
    </AppState.Provider>
   </div>
  );
}

export default App;
export {AppState}