import React, { useEffect } from 'react';
import { useLoaderData, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { API_URL } from './Create';
import { Link } from 'react-router-dom';

function Place() {
    let id=useLoaderData();
    console.log(id);
    let nav=useNavigate();
    const[ipData,setIpData]=useState([]);
    useEffect(()=>{getPlaceData()},[]);
    async function getPlaceData(){
        let resp=await axios.get(API_URL+'/'+id);
        setIpData(resp.data);
        console.log(resp.data);
    }
  return (
    <div className='box'>
        <h4 style={{color:"red",marginTop:"25px"}}>State: {ipData.state}</h4>
        <h4 style={{color:"red"}}>City: {ipData.city}</h4>
    </div>
  );
}

export default Place;