import { Layout } from "./layout";
import './portfolio.css';
import React from "react";


export function Home(){
    return(

        <Layout>
            
            <div className="container-fluid" id="home">
              <div className='container-home'>
                <div className='content'>
                    <h3 className="fs-1 fw-bold m-4">Hi, I'm Shirisha Konda</h3>
                    <h1 className="fs-1 m-4"> Front-End Developer</h1>
                    <p style={{fontSize:'18px',color:'CaptionText'}}>A FrontEnd focused Web Developer building the frontend of websites and web applications that leads to the overall product. And passionate about creating interactive applications and experience on the web.</p>
                </div>
                <div className="icon-content">
                    <button className="btn btn-success m-3 p-3 fs-5">Download Resume<i className="bi bi-arrow-down fs-4"></i></button>
                    <div className="icons m-2">
                        <button className="btn" style={{borderRadius:'50%',border:'1px solid black',margin:'0 10px',padding:'8px 15px'}}><a href="https://www.linkedin.com/in/shirishakonda22?trk=profile-badge"><i className="bi bi-linkedin fs-2" style={{color:'rgb(23, 136, 206)'}}></i></a></button>
                        <button className="btn" style={{borderRadius:'50%',border:'1px solid black',margin:'0 10px',padding:'8px 15px'}}><i className="bi bi-github fs-2" style={{color:'rgb(23, 136, 206)'}}></i></button>
                        <button className="btn" style={{borderRadius:'50%',border:'1px solid black',margin:'0 10px',padding:'8px 15px'}}><i className="bi bi-twitter fs-2" style={{color:'rgb(23, 136, 206)'}}></i></button>
                        <button className="btn" style={{borderRadius:'50%',border:'1px solid black',margin:'0 10px',padding:'8px 15px'}}><i className="bi bi-whatsapp fs-2" style={{color:'rgb(23, 136, 206)'}}></i></button>
                    </div>
                </div>
              </div>
           </div>
        </Layout>
       
    )
}