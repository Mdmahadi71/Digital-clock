import { useState } from 'react';
import './App.css'
import Container from './Components/Container'

function App() {
  


  let time = new Date().toLocaleTimeString();
  let [newTime ,setnewTime] = useState(time)
  let updateTime=(() => {
    let time = new Date().toLocaleTimeString();
    setnewTime(time)
  })


  setInterval(updateTime,1000)
  return (
    <>
      <Container>
        <div className=" text-center my-[30px]">
          <h2> {newTime} </h2>
        </div>
      </Container>
    </>
  )
}

export default App
