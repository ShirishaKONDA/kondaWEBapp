import { Portfolio } from "./navbar";
import './portfolio.css';


export function Layout({children}){
    return(
        <div>
            <Portfolio/>
            <div>
                {children}
            </div>
            
        </div>
    )
}