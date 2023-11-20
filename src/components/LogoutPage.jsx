import "./Login.css";
import { Link } from "react-router-dom";

function LogoutPage(){

    return(
        <div className="head">
            <div className='head-div'>
            <div className="oval-div"></div>
            <div className='text-div'>
                <h1>CCA Cockpit</h1>
                <h4>powered by ETAP</h4>
            </div>
            </div>
            
        <div className="logout-text">
            <h3><b>You have successfully Logged out, Thank You!</b></h3>
        </div>
        <div>
            <button type="submit" className="logout-btn"><Link to="/" style={{color:"blue"}}>Go Back to Login</Link></button>
        </div>
        </div>

    );

    }

export default LogoutPage;