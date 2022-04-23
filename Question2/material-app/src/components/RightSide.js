import { Typography,InputLabel } from "@mui/material";
import React from "react";
import Edit from "../components/Edit";
export default function RightSide({
  selectedItem,
  flagEdit,
  flagDescription,
  hanadleEditBtn,
}) {
  return (
    <>
      {flagEdit ? (
        <Edit values={selectedItem} hanadleEditBtn={hanadleEditBtn} />
      ) : null}
      {flagDescription ? (
        <>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.des}</p>
        </>
      ) : (
        <>
          <Typography variant="h1" component="h2">
            Welcome!
            <InputLabel>Please select an exercise from the list on the left side.</InputLabel>
          </Typography>

          ;
        </>
      )}
    </>
  );
}
