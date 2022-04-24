import React from 'react'
import { useState } from "react";
import { Grid } from "@mui/material";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Home() {
    const [itemArray, setItemArray] = useState([
        {
          id: 0,
          title: "HTML",
          category: "WebDesign",
          des: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          id: 1,
          title: "HTML2",
          category: "WebDesign",
          des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          id: 2,
          title: "JavaScript",
          category: "FrontEnd",
          des: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
        },
        {
          id: 3,
          title: "HTML2",
          category: "FrontEnd",
          des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          id: 4,
          title: "HTML2",
          category: "BackEnd",
          des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          id: 5,
          title: "HTML2",
          category: "BackEnd",
          des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
        },
      ]);
      const [selectedItem, setSelectedItem] = useState({});
  const [flagEdit, setFlagEdit] = useState(false);
  const [flagDescription, setFlagDescribtion] = useState(false);
  const [showNavigateBtn, setShowNavigateBtn] = useState("all"); //falg

  

  
  function edit() {
    setFlagEdit(true);
  }

  // function hanadleBtn(index) {
  //   // setItemArray(itemArray.filter((item)=> item.id != index.id))
  //   // setItemArray([...itemArray,index])
  //   // setFlagEdit(false);
  // }
  // console.log(showNavigateBtn);

  return (
   <>
   <Header itemArray={itemArray} setItemArray={setItemArray}/>
   <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ height: "80vh" }}
      >
        <Grid item xs={5} sx={{ mx: 5 }}>
          <LeftSide
            items={itemArray}
            setSelectedItem={setSelectedItem}
            setItemArray={setItemArray}
            setFlagEdit={setFlagEdit}
            setFlagDescribtion={setFlagDescribtion}
            edit={edit}
            showNavigateBtn={showNavigateBtn}
          />
        </Grid>
        <Grid item xs={5} sx={{ mx: 5 }}>
          <RightSide
            selectedItem={selectedItem}
            flagEdit={flagEdit}
            flagDescription={flagDescription}
           itemArray={itemArray}
            setItemArray={setItemArray}
           
          />
        </Grid>
      </Grid>

      <Footer setShowNavigateBtn={setShowNavigateBtn} />
    
   </>
  )
}
