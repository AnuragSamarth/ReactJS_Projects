import React  from "react"
import Header from "./components/Header"
import Movies from "./components/Movies";
import movies from './movies.json';

function App() {

  return (
    <div className="w-screen h-full bg-slate-700 overflow-hidden">
     <Header></Header>
     <div className="flex flex-wrap p-6 justify-between border-slate-100">
     {
      movies.map((element,index)=>{
      return ( <Movies
        key = {index}
        title={element.Title} 
        year={element.Year}
         img={element.Poster}/>
      );
      })
     }  
       
     </div>
   </div>
  )
}

export default App;
