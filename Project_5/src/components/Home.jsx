import React, {useState, useEffect} from 'react'

const Home = () => {
    const [state, setState] = useState(1);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function getData() {
        try {
          const get = await fetch(
            `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
          );
          if (!get.ok) {
            throw Error(get.statusText);
          }
  
          const res = await get.json();
  
          setData(res);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [state]);
  
  return (
    <div>
         <button onClick={()=> setState(state + 1)}>Click me {state}</button>
       <div className='flex justify-between flex-col'>
        {
          data.map((element,index)=>{
            return(
             <div key={index} className="display-data">
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4> <br /> <br />
             </div>
            )
          })
       }
       </div>
    </div>
  )
}

export default Home