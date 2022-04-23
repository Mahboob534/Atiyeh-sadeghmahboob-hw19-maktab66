import React,{useState} from "react";
import Form from './Form'




export default function Edit({ values,hanadleEditBtn }) {
  
const [valueEdit,setValueEdit]=useState({ id:values.id,
  category: values. category,
  title: values.title,
  des: values.des})



  
return(
 <Form value={valueEdit} setValue={setValueEdit} hanadleBtnForm={hanadleEditBtn} nameBtn='Edit'/>
  );
}
