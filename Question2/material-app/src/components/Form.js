import React from "react";

import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from "@mui/material";

const skills = ["WebDesign", "FrontEnd", "BackEnd"];
export default function Form({ value, setValue,hanadleBtnForm,nameBtn }) {
   const handleChange = (event) => {
    setValue({...value,[event.target.name]: event.target.value });
   };
  function Submit() {
    //console.log(value);
    hanadleBtnForm(value);
  }
  return (
    <form >
      <TextField
        label="Title"
        name='title'
        value={value.title}
        onChange={e=>handleChange(e)}
        margin="normal"
        fullWidth
      />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="skills">Skills</InputLabel>
        <Select
        name='category'
          fullWidth
          value={value.category}
          onChange={(e)=>handleChange(e)}
        >
          {skills.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <TextField
        label="Description"
        name='des'
        multiline
        rows="4"
        value={value.des}
        onChange={(e)=>handleChange(e)}
        margin="normal"
        fullWidth
      />
      <br />
      <Button  color="primary" onClick={Submit} variant="contained">
      {nameBtn}
      </Button>
    </form>
  );
}
