import React from "react";
import { Outlet } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
export default function () {
  return (
    <div style={{}}>
      <div className='header'  
        
      >
        <div className='row '>
          <h1 >     
                 
            Where in the world?
          </h1>
          <div  style={{ marginLeft: "auto" }}>
            <button>
              <FaMoon /> DarkMode
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

{
  /* <div>
      <div
        style={{
          display: "flex",
          flex: "1",
          height: "10vh",
          justifyContent: "space-between",
          border: "1px solid ",
          borderRadius: "25px",
          margin: "5px",
        }}
      >
        <h2 style={{ marginLeft: "1%" }}>Where in the world?</h2>
        <label style={{ margin: "2%" }}>
          <FaMoon /> DarkMode{" "}
        </label>
      </div>
      
    </div> */
}
