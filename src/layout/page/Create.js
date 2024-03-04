import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Create.css";
export const API_URL='https://659f8add5023b02bfe89d294.mockapi.io/assign_data';

function Create() {
    const [ipVal,setIpVal]=useState([]);
    let selectedState="";

    const nav=useNavigate();
    function getFormData(e){
        let name=e.target.name;
        let val=e.target.value;
        setIpVal((prevVal)=>{
            return{...prevVal,[name]:val};});
    }
    async function sendUserDetails(e){
        e.preventDefault();
        await axios.post(API_URL,ipVal);
        nav("/");
    }

    selectedState=ipVal.state;
    let city=[];
    
    if(selectedState=='Tamil Nadu'){
        city=["Chennai","Coimbatore","Trichy","Madurai"];
    }else if(selectedState=='Kerala'){
        city=["Kochi","Thrissur","Thiruvananthapuram","Kozhikode"];
    }else if(selectedState=='Karnataka'){
        city=["Bengaluru","Mysore","Mangaluru"];
    }else if(selectedState=='Uttar Pradesh'){
        city=["Lucknow","Mathura","Varanasi","Ayodhya"];
    }else if(selectedState=='Odisha'){
        city=["Puri","Bhubaneshwar","Cuttack"];
    }
    // if(selectedState){
    //      options=city.map((val)=>{
    //         <option key={val} value={val}>{val}</option>
    //     })
    // }
  return (
    <div >
        <form onSubmit={sendUserDetails} className='form'>
            <div className='fname child'>
                <label>First Name</label>
                <input type='text' name='firstname' onChange={getFormData} required />
            </div>
            <div className='lname child'>
                <label>Last Name</label>
                <input type='text' name='lastname' onChange={getFormData} required/>
            </div>
            <div className='email child'>
                <label>Email id</label>
                <input type='email' name='email_id' onChange={getFormData} required/>
            </div>
            <div className='phone child'>
                <label>Phone Number</label>
                <input type='text' name='phone_no' onChange={getFormData} required/>
            </div>
            <div className='state child'>
                <label>State</label>
                {/* <input type='text' name='state' onChange={getFormData}/> */}
                <select name="state" onChange={getFormData} required>
                    <option value="">Please select State</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
            </div>
            <div className='city child'>
                <label>City</label>
                <select name='city' onChange={getFormData} required>
                    <option value=''>Please select City</option>
                    {
                        city.map((val)=>{
                            return(<option key={val} value={val}>{val}</option>);
                        })
                    }
                </select>
            </div>
            <div className='message'>
                <label>Message (optional) </label>
                <textarea name='message'onChange={getFormData}/>
            </div>
            <button type='submit' className='buton mt-5 ml-5'>Submit</button>
        </form>
    </div>
  );
}

export default Create;