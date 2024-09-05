import Counter from "../compnents/Counter";
import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState(["Jeans", "Jackets"])
  const [userInput, setUserInput] = useState("");
  const inputChangeHandler = (e) => {
    setUserInput(e.target.value)
  }
  const addItemClicker = () => {
    setItems([...items,userInput])
  setUserInput("")
  
  }
  return (
    <>
      <input value={userInput} onChange={inputChangeHandler} placeholder="Enter Item" />
      <button  onClick={addItemClicker}>
        Add Item
      </button>
      {items.map((item, index, arr) => {
        return <Counter xyz={() => {
          const updateItems = [
            ...items.slice(0,index),
            ...items.slice(index+1),
          ];

          setItems(updateItems)
        }}
          key={index}
          
          itemName={item} />
      })}
</>
  )
}
export default Home;