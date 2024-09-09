import { useState,useEffect } from "react";
import { Layout } from "./layout";

export function All(){
    return(
        <div className="d-flex flex-column">
            <Web/><Appp/><Design/>
        </div>
    )
}

export function Web(){

    useEffect(()=>{
        console.log('Login component Mounted');

        return ()=>{
            console.log('Login component UnMounted');
        }
    },[])

    return(
        <div className="d-flex">
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="Computer_mouse.jpg" style={{height:'150px',borderRadius:'10px'}} widthalt="" />
                    <h6>Web Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div>
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="computer.jpg" style={{height:'150px',borderRadius:'10px'}} widthalt="" />
                    <h6>Web Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div>
        </div>  
    )
}

export function Appp(){

    useEffect(()=>{
        console.log('Login component Mounted');

        return ()=>{
            console.log('Login component UnMounted');
        }
    },[])

    return(
        <div className="d-flex" style={{flexWrap:'wrap'}}>
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="imageDesktop.jpg" style={{height:'150px',borderRadius:'10px'}} widthalt="" />
                    <h6>App Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div>
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="Mouse.jpg" style={{height:'150px',width:'270px',borderRadius:'10px'}} widthalt="" />
                    <h6>App Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div>
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="imageMouse.jpg" style={{height:'150px',width:'270px',borderRadius:'10px'}} widthalt="" />
                    <h6>App Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div>
        </div>
    )
}

export function Design(){

    useEffect(()=>{
        console.log('Login component Mounted');

        return ()=>{
            console.log('Login component UnMounted');
        }
    },[])

    return(
        <div className="d-flex">
            <div className="card" style={{width:'300px'}}>
                <div className="card-header">
                    <img src="imagesHand.jpg" style={{height:'150px',width:'270px',borderRadius:'10px'}} widthalt="" />
                    <h6>Design</h6>
                    <span><a href="#">Demo<i className="bi bi-arrow-right"></i></a></span>
                </div>
            </div> 
        </div>
    )
}

export function Projects(){

    const[component,setComponent]=useState('');

    function handleAllClick(){
        setComponent(<All/>);
    }
    function handleWebClick(){
        setComponent(<Web/>);
    }
    function handleAppClick(){
        setComponent(<Appp/>);
    }
    function handleDesignClick(){
        setComponent(<Design/>);
    }

    return(
        <Layout>
            <div id="projects" className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <div style={{textAlign:'center',padding:'20px 0'}}>
                    <h1>Portfolio</h1>
                    <p style={{fontSize:'14px'}}>Most recent work</p>
                </div>
                <div style={{paddingBottom:'10px',marginBottom:'10px',borderBottom:'1px solid gray'}}>
                    <button active="#" className="btn" style={{margin:'0 1.5rem',padding:'3px 10px'}} onClick={handleAllClick} >All</button>
                    <button className="btn" style={{margin:'0 1.5rem',padding:'5px 10px'}} onClick={handleWebClick}>Web</button>
                    <button className="btn" style={{margin:'0 1.5rem',padding:'5px 10px'}} onClick={handleAppClick}>App</button>
                    <button className="btn" style={{margin:'0 1.5rem',padding:'5px 10px'}} onClick={handleDesignClick}>Design</button>
                </div>
                {component}
                
            </div>
        </Layout>
    )
}