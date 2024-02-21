import { useState } from 'react'
import './App.css'
import Proped from './Proped';

const data = [
  {id: 1,item: "Eggs", quantity: 12, completed: false},
  {id :2,item: "milk", quantity: 1, completed: true},
  {id: 3,item: "Chicken", quantity: 4, completed: false},
  {id: 4,item: "Carrots", quantity: 6, completed: true},
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Proped items = {data}/>
    </>
  )
}

export default App
