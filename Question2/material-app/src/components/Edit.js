import React,{useState} from "react";
import Form from './Form'




export default function Edit({ values, itemArray,
  setItemArray }) {
  
const [valueEdit,setValueEdit]=useState({ id:values.id,
  category: values. category,
  title: values.title,
  des: values.des})
  
  function handleEditBtn(index){
  let filter = itemArray.filter(item=> item.id != index.id)
    console.log(filter);
     filter.push(index)
     setItemArray (filter)
  }
    
  


  
return(
 <Form value={valueEdit} setValue={setValueEdit} hanadleBtnForm={handleEditBtn} nameBtn='Edit'/>
  );
}
