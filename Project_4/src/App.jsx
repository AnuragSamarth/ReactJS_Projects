import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

   useEffect(()=> {
      async function getData(){
        try{
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
        if(!get.ok){
          throw Error(get.statusText)
        }
        
       const res = await get.json();

       setData(res);
       console.log(res)
      }catch(error){
        console.log(error);
      }
   }
   getData();
  },[state])
  
   console.log("Function body");
  return (
    <div>
      <Header />
     <button onClick={()=> setState(state + 1)}>Click me {state}</button>
       {
          data.map((element,index)=>{
            return(
             <div key={index} className="display-data">
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
             </div>
            )
          })
       }
    </div>
  );
}

export default App;
