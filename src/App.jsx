import { useState } from 'react';
import './App.css'
import Container from './Components/Container'

function App() {

  let time = new Date().toLocaleTimeString();
  let [newTime, setnewTime] = useState(time);

  let updateTime = (() => {
    let time = new Date().toLocaleTimeString();
    setnewTime(time)
  })


  setInterval(updateTime, 1000)
  return (
    <div className=''>
      <Container className={`my-[200px] `}>
        <div className="">
          <h2 className=' font-neto text-[28px] text-center my-4 '>Digital Clock</h2>
        </div>
        <div className=" w-[400px] h-[150px] mx-auto bg-black text-center leading-[150px]  rounded-[20px]">
          <h2 className=' font-Time text-[46px] text-[red]'> {newTime} </h2>
        </div>
      </Container>
    </div>
  )
}

export default App
