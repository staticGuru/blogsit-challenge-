import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';



const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
    <div className="container" style={{backgroundColor: 'gray',alignItems:'center'}}><p style={{margin:'auto'}}>	&copy; Blogsite-2021</p></div>
        
    </div>
      </React.Fragment>
    
   )

 }

export default Layout