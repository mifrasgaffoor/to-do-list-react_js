import React,{useState,useEffect}from 'react'
import InputArea from './InputArea'
import ToDoArea from './ToDoArea'

const App = () => {
const [item, setItem] = useState([])



const add=(items)=>{
  setItem((currentItem)=> {
  localStorage.setItem("items" , JSON.stringify([...currentItem,items]))
  return [...currentItem,items]});
};

useEffect(()=>{
  const items  = localStorage.getItem("items");
  setItem(JSON.parse(items));
},[])



const deleteItem =(id)=>{
  setItem((currentItem)=>{
    let temp =  currentItem.filter((item,index)=>{
      return index !== id;
    })

  localStorage.setItem("items" , JSON.stringify(temp));
  return temp;
  })
}

console.log(item);


  return (
    <div className="container">
    <div className="heading">

      <h1>To-Do-List</h1>
    </div>
      <InputArea additem={add}      />
      <div>
     <ul>
     {item.map((item,index)=>{
    return(
     <ToDoArea 
      text={item}  
      key={index}  
      index={index} 
      onClick={()=>deleteItem(index)}    />
    )
       })}
     </ul>
       
      </div>
    </div>
  )
}

export default App
