import { Typography, InputLabel } from "@mui/material";
import React from "react";
import Edit from "../components/Edit";
export default function RightSide({
  selectedItem,
  flagEdit,
  flagDescription,
  itemArray,
  setItemArray,
}) {
  return (
    <>
      {flagEdit ? (
        <Edit
          values={selectedItem}
          itemArray={itemArray}
          setItemArray={setItemArray}
        />
      ) : (
        <Typography variant="h2" component="h2">
          {flagDescription ? (
            <span> {selectedItem.title} </span>
          ) : (
            <span>Welcome!</span>
          )}
          <InputLabel>
            {" "}
            {flagDescription ? (
              <p>{selectedItem.des}</p>
            ) : (
              <span>
                Please select an exercise from the list on the left side.
              </span>
            )}
          </InputLabel>
        </Typography>
      )}
    </>
  );
}
