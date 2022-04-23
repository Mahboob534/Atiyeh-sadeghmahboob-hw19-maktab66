import React from "react";
import {AppBar, Box, Toolbar, Typography,Button,IconButton,
 InputLabel
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ModalAdd from "../components/ModalAdd";
import {Link, Outlet} from "react-router-dom";
export default function Header({ itemArray, setItemArray }) {
  function handleAdd(index) {
    console.log(index);
    setItemArray([...itemArray, index]);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "10vh", textAlign: "center" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <InputLabel
              variant="h6"
              sx={{ textAlign: "center", color: "white", fontSize: "1rem" }}
            >
              {" "}
              my skills within
            </InputLabel>
            MATERIAL UI
          </Typography>
         
          
          
          <Button variant="contained"><Link to='/Login'>Login</Link></Button>
          <Button variant="contained"> <Link to='/Dashbord'>Dashbord</Link> </Button>
          <Button
            variant="contained"
            sx={{
              color: "black",
              bgcolor: "orange",
              borderRadius: 50,
              width: 60,
              height: 60,
            }}
          >
            <ModalAdd handleAdd={handleAdd} />
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
     
  );
}
