import { Layout } from "./layout"
import { Form,Formik,Field,ErrorMessage,useFormik } from "formik"
import * as yup from "yup";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact(){

    const formik=useFormik({
        initialValues:{name:'',email:'',phone:'0',message:''},
        isSubmitting:true,
        validationSchema:yup.object({
            name: yup.string().required('Full name required').min(4,'Name is too short'),
            email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address").required('Email address required'),
            phone:yup.string().matches(/\+1\d{10}/,"Inavlid mobile"),
            message:yup.string().required('Mention something here')
        }),
        onSubmit:(values)=>{console.log(values);}
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_3x979vv', 'template_4ffx0ep', form.current, {
            publicKey: 'kiyN-b_M9qBYdSchr',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            console.log("message sent")
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );}



    return(
        <Layout>
            <div id="contact" className="container-fluid" style={{height:'80vh',display:'flex', flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <div className="contact page " style={{boxShadow:'0px 0px 3px 2px rgb(23, 136, 206)'}}>
                    <form ref={form} style={{padding:'40px 60px 60px'}} onSubmit={sendEmail} >
                        <dl>
                            <dt>Full Name</dt>
                            <dd><input type="text" name='name' className="form-control-container" onChange={formik.handleChange}  style={{padding:'5px',width:'280px'}} /></dd>
                            <dd className="text-danger">{formik.errors.name}</dd>
                            <dt>Email ID</dt>
                            <dd><input type="email" name='email' className="form-control-container" onChange={formik.handleChange} style={{padding:'5px',width:'280px'}} /></dd>
                            <dd className="text-danger">{formik.errors.email}</dd>
                            <dt>Phone number</dt>
                            <dd><input type="text" name='phone' className="form-control-container" onChange={formik.handleChange} style={{padding:'5px',width:'280px'}} /></dd>
                            <dd className="text-danger">{formik.errors.phone}</dd>
                            <dt>Message</dt>
                            <dd><textarea type="message" name='message' className="form-control-container" onChange={formik.handleChange} rows='4'style={{width:'280px', padding:'5px'}} placeholder="type something here.."  /></dd>
                            <dd className="text-danger">{formik.errors.message}</dd>
                        </dl>
                        <button data-bs-target="#form" data-bs-toggle='modal' type="submit" className="btn btn-dark">Submit</button>
                        <div className="modal fade" id='form' style={{top:'50%',textAlign:'center'}}>
                            <div className="modal-dialog">
                                <div className="modal-content" style={{padding:'20px'}}>
                                    <p><h6><i style={{color:'green',paddingRight:'20ppx'}} className="bi bi-check-circle-fill p-1"></i>Message sent successfully</h6></p>
                                </div>
                            </div>
                        </div>
                        <button type="reset" className="btn fs-3"><i className="bi bi-arrow-clockwise"></i></button>
                    </form>
                </div>
                <div className="d-flex flex-column">
                    <h2 style={{fontSize:'40px',fontWeight:'400'}}><i className="bi bi-person-fill" style={{ color:'rgb(23, 136, 206)',padding:'5px'}}></i>Contact details</h2>
                    <hr />
                    <div style={{paddingLeft:'20px'}}>
                        <p><span className="fs-5 fw-bold"><i className="bi bi-envelope" style={{padding:'0 5px'}}></i>Email-id:</span><a href="https://mail.google.com/#inbox?compose=new" style={{fontSize:'22px',textDecoration:'none'}}> shirisha.k1122@gmail.com</a></p>
                        <p><span className="fs-5 fw-bold"><i className="bi bi-telephone" style={{padding:'0 5px'}}></i>Phone Number:</span> <a href="tel:+16232681538" style={{fontSize:'22px',textDecoration:'none'}}>+1 (623)-268-1538</a></p>
                        <p><span className="fs-5 fw-bold"><i className="bi bi-whatsapp" style={{padding:'0 5px'}}></i>whatsapp:</span> <a href="https://wa.link/3ciwuc" style={{fontSize:'22px',textDecoration:'none'}}>6232681538</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>