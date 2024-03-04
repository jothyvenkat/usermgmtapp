import React from 'react';
import {Link,Outlet} from "react-router-dom";
import "./RootLayout.css";

function RootLayout(){
    return(
        <div>
            <ul className="menu mt-4">
                
                <h4>User Management System</h4>
            </ul>
            <ul class="options">
                <li>
                    <button><Link to='create'>Create</Link></button>
                </li>
                <li>
                    <button><Link to='read'>Read</Link></button>
                </li>
                <li className='update'>
                    <Link to='update/:id'>Update</Link>
                </li>
                <li className='detail'>
                    <Link to="viewdetail/:id">View Details</Link>
                </li>
            </ul>
            
            <Outlet/>
        </div>
    );
}
    
export default RootLayout;