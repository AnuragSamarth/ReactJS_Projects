import React, { useState }  from "react"
import Header from "./components/Header"


function App() {

  const [num , setNum] = useState(1);

 const inc=()=>{
  return setNum(num + 1);
 }

 const dec=()=>{
  return setNum(num - 1);
 }

  return (
    <div className="w-screen h-full overflow-hidden">
     <Header></Header>
     <div className="flex flex-col items-center m-40">
     <div className="w-96 h-52 text-center p-5 font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <h2 className="text-6xl">{num}</h2>
       <div className="m-10 flex justify-between">
      <button className="border-2 border-gray-950	 p-2" onClick={inc}>Increment</button>
      <button className="border-2 border-gray-950	 p-2" onClick={dec}>Decrement</button>
      </div>
     </div>
     </div>
     </div>
  )
}

export default App;
