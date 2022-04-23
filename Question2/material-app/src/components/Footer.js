import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";


export default function Footer({setShowNavigateBtn}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };



  function handleShow(item) {
    setShowNavigateBtn(item)
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'  }}>
      <Tabs value={value} onChange={handleChange} centered >
        <Tab label="ALL"  onClick={() => handleShow('all')} sx={{mx:5}}/>
        <Tab label="WebDesign"  onClick={() => handleShow("WebDesign")} sx={{mx:5}} />
        <Tab label="FrontEnd"  onClick={() => handleShow("FrontEnd")} sx={{mx:5}} />
        <Tab label="BackEnd" onClick={() => handleShow("BackEnd")} sx={{mx:5}}/>
      </Tabs>
    </Box>








    // <Box sx={{ width: "100vw" }}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction
    //       label="All"
    //       component="h1"
    //       onClick={() => handleShow('all')}
    //     />
    //     <BottomNavigationAction
    //       label="WebDesign"
    //       component="h1"
    //       onClick={() => handleShow("WebDesign")}
    //     />
    //     <BottomNavigationAction
    //       label="FrontEnd"
    //       component="h1"
    //       onClick={() => handleShow("FrontEnd")}
    //     />
    //     <BottomNavigationAction
    //       label="BackEnd"
    //       component="h1"
    //       onClick={() => handleShow("BackEnd")}
    //     />
    //   </BottomNavigation>
    // </Box>
  );
}
