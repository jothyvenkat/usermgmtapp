import React, { useState ,useEffect} from 'react';
import axios from "axios";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { API_URL } from './Create';

function Update() {
    const [userData,setUserData]=useState({
        firstname:'',
        lastname:'',
        email_id:'',
        phone_no:'',
        state:'',
        city:'',
        message:''
    })
    const [id,setId]=useState("");
    let nav=useNavigate();
    let loader=useLoaderData();
    function getFormData(e){
        let name=e.target.name;
        let val=e.target.value;
        setUserData((prevVal)=>{
            return{...prevVal,[name]:val};});
    }
    useEffect(()=>{
        setUserData({
            firstname:loader.firstname,
            lastname:loader.lastname,
            email_id:loader.email_id,
            phone_no:loader.phone_no,
            state:loader.state,
            city:loader.city,
            message:loader.message
        });
        setId(loader.id);
    },[]);
    async function updateUserDetails(e){
        e.preventDefault();
        await axios.put(API_URL+'/'+id,userData);
        nav("/");
    }
  return (
    <>
        <form onSubmit={updateUserDetails} className='form'>
            <div className='fname child'>
                <label>First Name</label>
                <input type='text' name='firstname' value={userData.firstname} onChange={getFormData} />
            </div>
            <div className='lname child'>
                <label>Last Name</label>
                <input type='text' name='lastname' value={userData.lastname} onChange={getFormData}/>
            </div>
            <div className='email child'>
                <label>Email id</label>
                <input type='email' name='email_id' value={userData.email_id} onChange={getFormData}/>
            </div>
            <div className='phone child'>
                <label>Phone Number</label>
                <input type='text' name='phone_no' value={userData.phone_no} onChange={getFormData}/>
            </div>
            <div className='state child'>
                <label>State</label>
                <input type='text' name='state' value={userData.state} onChange={getFormData}/>
            </div>
            <div className='city child'>
                <label>City</label>
                <input type='text' name='city' value={userData.city} onChange={getFormData}/>
            </div>
            <div className='message'>
                <label>Message</label>
                <textarea name='message' value={userData.message} onChange={getFormData}/>
            </div>
            <button type='submit' className='btn btn-success mt-5 ml-5'>Submit</button>
        </form>
    </>
  )
}

export async function getSingleUser(props){
    const {params}=props;
    const {id}=params;
    let resp=await axios.get(API_URL+'/'+id);
    return resp.data;
}
export default Update;