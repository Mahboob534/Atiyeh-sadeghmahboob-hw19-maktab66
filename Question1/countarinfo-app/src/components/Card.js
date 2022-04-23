import React from "react";

export default function Card({ item }) {
  return (
    <div className="card">
      <div>
        <img src={item.flag}></img>
      </div>
      <h2>{item.name}</h2>
      <div>
        <div className='description'>
          <h6>Population: </h6>
          <span>{item.population}</span>
        </div>
        <div className='description'>
          
          <h6>Region:</h6>
          <span>{item.region}</span>
        </div>
        <div className='description'>
         
          <h6>Capital:</h6>
          <span>{item.capital}</span>
        </div>
      </div>
    </div>
  );
}
