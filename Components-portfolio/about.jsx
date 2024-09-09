import { Layout } from "./layout";
import './portfolio.css'


export function About(){
    return(
        <Layout>
             <div id='about' className="container-fluid" style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="d-flex justify-content-around" style={{}}>
                <div className="content" style={{flexBasis:'600px'}}>
                    <h2 className="fs-2 fw-bold" style={{margin:'2rem 0'}}>Who Am I?</h2>
                    <p style={{fontSize:'18px'}}>I am a React Front-end developer. I create responsive secure websites for my clients. I create web pages with UI/UX user interface, I have years of experience and many clients are happy with the projects carriend out.<br/>....Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vitae soluta excepturi repellat asperiores temporibus eos sit animi delectus reprehenderit ex labore facere, nihil molestiae laboriosam alias perspiciatis itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum assumenda porro excepturi, ipsum eos sit provident quisquam nam laudantium distinctio et harum eum sapiente quis quae similique dicta. Nam.</p>
                </div>
                <div className="about-image">
                    <img src="Screenshot 2024-08-28 151202.png" width='450px' height='450px' alt="" />
                </div>
            </div>
        </div>
        </Layout>
       
    )
}