import { useState } from "react"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"


function App() {
  const [list, setList] = useState([])
  
  const addList = (description, value, type) => {
    const id = crypto.randomUUID()
    const newList = {description, value, type, id}

    setList([...list, newList])
  }

  const removeList = (id) => {
    const filteredList = list.filter((elt) => {
      if(elt.id !== id){
        return elt
      }
    })

    setList(filteredList)
  }
  return (
    <>
      <Header />
      <HomePage list={list} addList={addList} removeList={removeList} />
    </>
  )
}

export default App
