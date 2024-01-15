import React,{useContext} from 'react'
import { AppState } from '../App'


const CompC = () => {

  const AppData = useContext(AppState);

  return (
    <div>CompC
     <h1 className=' text-3xl p-4 bg-slate-200'>{AppData}</h1>
     <p>This code is before the Context-API which means whenever you pass the data from parent to child components by porps and states in this case the data will travel all through the components which create difficulty to understand the code and read the data through the components and (create Props Drilling) <br /> In above example the (Anurag data) will be access by CompC components but the data will travel by CompA and then goes towards CompB and the pass towards CompC and the display the data. </p> <br /> <br />
     <p>But In context API the data will pass only those components whos actually nead that data. In that case no one intermmeadiate components enter in between. and easy to read the components. </p>
    </div>
  )
}

export default CompC