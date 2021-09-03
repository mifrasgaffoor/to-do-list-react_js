import React,{useState} from 'react'

const InputArea = ({additem}) => {
const [inputText, setinputText] = useState("")

const handleChange  = (e)=>{
    setinputText(e.target.value);
}

const  additems = ()=>{
    if(inputText.trim()!==""){
additem(inputText);
setinputText("")
}
return
}

    return (
        <div className="form">
            <input type="text"   onChange={handleChange}  value={inputText}  />
            <button   onClick={additems} ><span>Add</span></button>
        </div>
    )
}

export default InputArea
