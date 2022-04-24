import React,{useState} from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


export default function Categories({
  title,
  items,
  onItemSelect,
  onEditItem,
  onDeleteItem,
}) {

  return (
    <>
      <h2>{title}</h2>
      <List component="ul" sx={{ width:500, maxWidth: 600, bgcolor: "background.paper" }}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.id}
              onClick={() => onItemSelect(item)}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <EditIcon onClick={onEditItem} />          
                  <DeleteIcon onClick={() => onDeleteItem(item)} />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText id={item.id} primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}


