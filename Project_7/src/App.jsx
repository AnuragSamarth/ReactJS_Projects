import React, {useState, useEffect} from "react";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts";
import { ThemeContext, themes } from "./Context/Context";


function App() {
 
  const [theme, setTheme] = useState(themes.light)

  //btn
  const handleOnClick = ()=>{
    return (
      theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    )
  }

  const body = document.body
  useEffect(()=>{
   switch(theme){
    case themes.light:
      body.classList.remove("bg-slate-800");
      body.classList.add("text-black");
      body.classList.add('bg-slate-200');
      body.classList.add('text-white');
     break;
    case themes.dark:
      body.classList.remove("bg-slate-800");
      body.classList.add("text-white");
      body.classList.add('bg-slate-800');
      body.classList.add('text-black');
      break
   }
  },[theme]);


  return (
   <div>
    <ThemeContext.Provider value={{theme,handleOnClick}}>
    <Header></Header>
    <Posts/>
    </ThemeContext.Provider>
   </div>
  );
}

export default App;
