import { Layout } from "./layout";
import './portfolio.css'


export function Skills(){
    return(
        <Layout>
            <div id="skills" className="container-fluid d-flex flex-column justify-content-center align-items-center text-center" style={{height:'80vh'}}>
                <div style={{padding:'30px 0'}}>
                    <h2 className="fw-bold">Skills</h2>
                    <p className=""> My technical level</p>
                </div>
                <div className="d-grid gap-5" style={{gridTemplateColumns:'1fr 1fr'}}>
                    <div style={{border:'1px solid gray',padding:'20px 40px',borderRadius:'15px',background:'whitesmoke'}}>
                        <h5 style={{padding:'15px 0',fontSize:'20px',fontWeight:'bold'}}>Frontend developer</h5>
                        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',textAlign:'left',gap:'15px' }}>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>HTML</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Good</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>BootStrap</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Basic</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>CSS</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Good</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>Git</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Basic</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>JavaScript</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Good</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>React</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Intermediate</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>JQuery</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Intermediate</p></div>
                        </div>
                    </div>
                    <div  style={{border:'1px solid gray',padding:'20px 40px',borderRadius:'15px',background:'whitesmoke'}}>
                        <h5 style={{padding:'15px 0',fontSize:'20px',fontWeight:'bold'}}>Backend developer</h5>
                        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',textAlign:'left',gap:'15px' }}>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>MsSQL</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Good</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>NodeJS</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Basic</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>AWS</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Intermediate</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>Agile</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Basic</p></div>
                            <div> <h6><i className="bi bi-check-circle-fill p-md-1"></i>SDLC Models</h6><p style={{paddingLeft:'25px',fontSize:'14px',color:'gray'}}>Basic</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}