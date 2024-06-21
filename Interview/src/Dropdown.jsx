import React from 'react'
import {useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

const Dropdown = () => {

     // state to store the value of the country
  const [country, setCountry] = useState({name :"",value:"",cities:[]});


  return (
    <> 
    {/* 1st DropDown */}
    <select
      value={country}
      onChange={(e) => {
        console.log(e.target.value);
        setCountry([e.target.value]);
      }}
    >
      {countries.map((item, index) => {
        return (
          <option value={index}>
            {item.name}
          </option>
        );
      })}
    </select>

    {/* 2nd DropDown */}

    <select value={country}>
      {countries[country] &&
        countries[country].cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
    </select>
    </>
  )
}

export default Dropdown

