import { useState } from 'react';
import './App.css'
import Container from './Components/Container'

function App() {

  let time = new Date().toLocaleTimeString();
  let [newTime ,setnewTime] = useState(time);

  let updateTime=(() => {
    let time = new Date().toLocaleTimeString();
    setnewTime(time)
  })


  setInterval(updateTime,1000)
  return (
    <div className=''>
      <Container>
        <div className=" w-[400px] h-[200px] mx-auto bg-black text-center leading-[200px]  my-[200px] rounded-[20px]">
          <h2 className=' font-Time text-[42px] text-[red]'> {newTime} </h2>
        </div>
      </Container>
    </div>
  )
}

export default App
