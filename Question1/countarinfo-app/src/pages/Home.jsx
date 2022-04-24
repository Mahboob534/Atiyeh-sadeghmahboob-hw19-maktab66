import React, { useState, useEffect, useContext } from "react";
import { InfoContext } from "../context/CountaryInfo";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";
import { Navigate, NavLink } from "react-router-dom";

export default function Home() {
  const { countariesInfo, setCountariesInfo } = useContext(InfoContext);
  

  const searchCountry = async term => {
   
    if(term.length < 3 || term === '') return
  
      const res = await fetch(`https://restcountries.com/v2/name/${term}`)
    const data = await res.json()
     //console.log(data)
     setCountariesInfo (data)
   
  }
 
 
const filterByRegion = async region => {
  if(region == '') return
  const res = await fetch(`https://restcountries.com/v2/region/${region}`)
  //console.log(res);
  const data = await res.json()
   setCountariesInfo(data)
}

  return (
    <div>
      <div className="inputdiv">
        <FaSearch className="iconsearch" disabled />
        <input
          type="text"
         
          placeholder="Search for a country..."
          className="inputsearch"
          onChange={ e=> searchCountry(e.target.value)}
        />

        <select
          name="region"          
          className="selectclass"
          onChange={ e => filterByRegion(e.target.value)}
        >
          <option value="" >
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className='main'
        
      >
      
        { countariesInfo ?
           countariesInfo.map((item) => (
          
            <NavLink className="link" to={`${item.name}`}>
              <Card item={item} key={item.id}/>
            </NavLink>))
          
          : <Navigate to='/*'/>
        }
      </div>
    </div>
  );
}
