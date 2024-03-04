import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  let nav=useNavigate();
  function gohome(){
    nav("/");
  }
  return (
    <div><h4>Page Not Found</h4>
    <p>The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.</p>
    <button className="home" onClick={gohome}>Go to Home Page</button></div>
  )
}

export default PageNotFound;