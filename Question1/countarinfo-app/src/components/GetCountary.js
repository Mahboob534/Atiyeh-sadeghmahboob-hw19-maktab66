import React, { useContext } from "react";
import {InfoContext} from'../context/CountaryInfo';
export function GetCountary(name) {
    const {countariesInfo}=useContext(InfoContext)
    return  (
      countariesInfo.find((countary) => countary.name === name)
    )
    
  }

  