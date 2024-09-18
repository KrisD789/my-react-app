import logo from './logo.svg';
import './App.css';
import Myfooter from './myfooter';
import Myheader from './myheader';
import { useState } from 'react';


function App() {

  setInterval(updateTime, 1000);
  let now = new Date().toLocaleDateString('th-TH');
  const [time, setTime ] = useState(now);
  const [num, setNum] = useState(0);

  function updateTime(){
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);

  }


  return (
   <div className='App'>
      <Myheader/>
        <div> ในขณะนี้เวลา {time} </div>
        <h2>  {num} </h2>
        <button onClick={()=>setNum(num+1)}>  เพิ่ม  </button>
        <button onClick={()=>setNum(num-1)}>  ลด  </button>
      <Myfooter/>
   </div>
  );
}

export default App;
