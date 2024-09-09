import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './portfolio.css';


export function Portfolio(){


    return(
        <div>
           <nav className={'d-flex mt-4 justify-content-around align-items-center'}>
                <div className="navlogo">
                    <span><button className='btn'><a className='text-decoration-none' href='#'>K</a></button></span>
                </div>
                <div className='navlinks'>
                    <ul className='d-flex'>
                        <li><Link to={'/'} href="#home"><button  className='btn'>Home</button></Link></li>
                        <li><Link to={'/about'}><button className='btn'>About</button></Link></li>
                        <li><Link to={'/skills'} ><button className='btn'>Skills</button></Link></li>
                        <li><Link to={'/services'}><button className='btn'>Services</button></Link></li>
                        <li><Link to={'/projects'}><button className='btn'>Projects</button></Link></li>
                        <li><Link to={'/contact'}><button className='btn'>Contact</button></Link></li>
                    </ul>
                </div>   
           </nav> 
           <hr />

       </div>
    )
}