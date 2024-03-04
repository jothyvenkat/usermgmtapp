import React, { useState,useEffect } from 'react';
import axios from "axios";
import {API_URL} from './Create';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Read.css";


function Read() {
    const [apiData,setApiData]=useState([]);
    let nav=useNavigate();
    async function getData(){
        let resp=await axios.get(API_URL);
        setApiData(resp.data);
    }
    useEffect(()=>{
        getData();
    },[])
    async function deleteUserData(id){
        await axios.delete(API_URL+'/'+id);
        getData();
    }
    function updateUserData(id){
        nav("/update/"+ id);
    }
    function viewUserDetails(id){
        nav("/viewdetail/"+id);
    }
    function deleteConfirm(id){
        if(window.confirm("Are you sure you want to delete this?")) {
            deleteUserData(id);
        }
    }
  return (
    <>
        <h5 class="title">USERS LIST</h5>
        <table className='mt-4'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    apiData.map((item,index)=>{
                        return(
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.phone_no}</td> 
                            <td><button type='button' className='btn btn-danger me-2' onClick={()=>deleteConfirm(item.id)}>Delete</button>
                                <button className='btn btn-secondary me-2' onClick={()=>updateUserData(item.id)}>Update</button>
                                <button className='btn btn-info' onClick={()=>viewUserDetails(item.id)}>View Details</button>
                            </td>
                        </tr>
                        );
                    }
                    )
                }       
            </tbody>
        </table>
        <button className='butn'><Link to='create'>Add new User</Link></button>
    </>
  )
}

export default Read;