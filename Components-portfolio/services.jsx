import { Layout } from "./layout";
import './portfolio.css'


export function Services(){
    return(
        <Layout> 
            <div id="services" className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{height:'70vh'}}>
                <div style={{padding:'40px 0',textAlign:'center'}}>
                    <h2 className="fw-bold fs-1">Services</h2>
                    <p>What i offer</p>
                </div>
                <div className="d-flex flex-row gap-4">
                    <div style={{width:'200px',height:'250px',borderRadius:'10px',background:'whitesmoke',display:'flex',flexDirection:'column',justifyContent:'end',padding:'35px 35px',boxShadow:'0px 0px 4px 1px rgb(23, 136, 206)'}}>
                        <i className="bi bi-columns fs-3" style={{padding:'15px 0'}}></i>
                        <h5 style={{width:'30px'}}>Web Designer</h5>
                        <span data-bs-target='#web'  data-bs-toggle='modal' style={{fontSize:'14px',fontWeight:'revert-layer',padding:'10px 0'}}><a href="#">View More<i className="bi bi-arrow-right p-1 text-primary"></i></a></span>
                        <div className="modal fade" id="web">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{padding:'30px'}}>
                                    <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'20px 60px'}}>
                                        <h5>Web Designer</h5>
                                        <p className="fs-6">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I develop the user interface.</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Web page development</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I create UX element interactions</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I position your company brand</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Design and mockups of products for companies.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{width:'200px',height:'250px',borderRadius:'10px',background:'whitesmoke',display:'flex',flexDirection:'column',justifyContent:'end',padding:'35px 30px',boxShadow:'0px 0px 4px 1px rgb(23, 136, 206)'}}>
                        <i className="bi bi-pencil-square fs-3" style={{padding:'15px 0'}}></i>
                        <h5>UI/UX Designer</h5>
                        <span data-bs-target='#ui'  data-bs-toggle='modal' style={{fontSize:'14px',fontWeight:'revert-layer',padding:'10px 0'}}><a href="#">View More<i className="bi bi-arrow-right p-1 text-primary"></i></a></span>
                        <div className="modal fade" id="ui">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{padding:'30px'}}>
                                    <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'20px 60px'}}>
                                        <h5>UI/UX Designer</h5>
                                        <p className="fs-6">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I develop the user interface.</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Web page development</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I create UX element interactions</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I position your company brand</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Design and mockups of products for companies.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{width:'200px',height:'250px',borderRadius:'10px',background:'whitesmoke',display:'flex',flexDirection:'column',justifyContent:'end',padding:'35px 30px',boxShadow:'0px 0px 4px 1px rgb(23, 136, 206)'}}>
                        <i className="bi bi-brilliance fs-3" style={{padding:'15px 0'}}></i>
                        <h5>Branding Designer</h5>
                        <span data-bs-target='#branding'  data-bs-toggle='modal' style={{fontSize:'14px',fontWeight:'revert-layer',padding:'10px 0'}}><a href="#">View More<i className="bi bi-arrow-right p-1 text-primary"></i></a></span>
                        <div className="modal fade" id="branding">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{padding:'30px'}}>
                                    <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'20px 60px'}}>
                                        <h5>Branding Designer</h5>
                                        <p className="fs-6">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I develop the user interface.</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Web page development</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I create UX element interactions</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> I position your company brand</span>
                                        <span style={{padding:'6px 0'}}><i className="bi bi-check-circle"></i> Design and mockups of products for companies.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}