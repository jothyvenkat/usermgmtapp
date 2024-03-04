import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';
import { useLoaderData,Link,Outlet, useNavigate } from 'react-router-dom';
import { API_URL } from './page/Create';
import plstyle from './Viewdetails.module.css';
import "./ViewDetailsroot.css"

function ViewDetailsroot() {
    const [apiData,setApiData]=useState([]);
    let [isState,setState]=useState(false);
    let nav=useNavigate();
    useEffect(()=>{
        getData(id);
        setState(false);
    },[])
    let id=useLoaderData();
    let detstyle= isState? plstyle.p2:plstyle.p1;
     async function getData(id){
        let resp=await axios.get(API_URL+'/'+id);
        setApiData(resp.data);
    }
    function showdet(){
        // nav('/viewdetail/'+id+'/place');
        // setState(true);
        let x=document.getElementById('place_det');
        let y=document.getElementById('btn');
        if (x.style.display=="none") {
            x.style.display = "block";
            y.style.display="none";
        }
            else {
                y.style.display = "block";
                x.style.display="none";
            }
    }
    function hidedet() {
        let a=document.getElementById('btn1');
        let b=document.getElementById('btn');
        let c=document.getElementById('place_det');
        if (a.style.display=="none") {
            c.style.display="block";
            b.style.display="none";
        } else {
            c.style.display="none";
            b.style.display="block";
        }
    }
    function gohome(){
        nav("/");
    }
  return (
    <>
    <div className='mt-5 box'>
        <h2>USER DETAILS</h2>
        <h3><span>First Name: </span> {apiData.firstname}</h3>
        <h3><span>Last Name: </span> {apiData.lastname}</h3>
        <h3><span>Phone Number: </span> {apiData.phone_no}</h3>
        <h3><span>Email ID:</span> {apiData.email_id}</h3>
        <h3><span>Message:</span> {apiData.message}</h3>
        <button onClick={showdet}  id='btn'>Show Place Details</button>
        <div id="place_det">
            <h3><span>State: </span>{apiData.state}</h3>
            <h3><span>City: </span>{apiData.city}</h3>
            <button id="btn1" onClick={hidedet}>Hide Place Details</button>
        </div>
    </div>
    <button className="home" onClick={gohome}>Go to Home Page</button>
    <Outlet/>
    </>
  );
}
export function getUserid(props){
    let {params}=props;
    let {id}=params;
    return id;
}

export default ViewDetailsroot;