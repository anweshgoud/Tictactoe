import {useState } from "react";
import { useSelector } from "react-redux";

const Box = ({HandleInput,FindErrorInput,row,col}) => {

  const {player1,count}=useSelector((store)=>store.GridStore);

  const [currentValue,setCurrentValue]=useState("");
  const [readonly1,setReadOnly]=useState(false);

  const HandleinputValue=(event)=>{
    let inputValue=event.target.value;
    setCurrentValue(inputValue);

    if(player1){
      if(inputValue==='X'){
        HandleInput(inputValue,row,col);
        setReadOnly(inputValue);
        FindErrorInput(false);
      }
      else{
        setReadOnly(false);
        FindErrorInput(true);
      }
    }

    else{

      if(inputValue==='O'){
        setReadOnly(inputValue);
        HandleInput(inputValue,row,col);
        FindErrorInput(false)

      }
      else{
        setReadOnly(false);
        FindErrorInput(true);
      }
    }
  }

  return (
    <>
      <input className="Box text-center" onChange={HandleinputValue} readOnly={readonly1}></input>
    </>
  );
};

export default Box;
