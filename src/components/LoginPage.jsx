import React,{useState} from 'react'
import "./Login.css";
import { Link,useNavigate } from 'react-router-dom';

const LoginPage=()=>{

    // const [email,setEmail]=useState("");

    // const [passw,setPassw]=useState("");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({
        //   ...formData,
        //   [name]: value,
        // });
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(formData);
        setFormData({
            email: '',
            password: '',
          });
        console.log(formData);
        alert("Logged in successfully");
        navigate("/dashboard2");

    }

    return(  

     <React.Fragment>
<div className='head'>

    <div className='head-div'>
    <div className="oval-div"></div>
    <div className='text-div'>
      <h1>CCA Cockpit</h1>

      <h4>powered by ETAP</h4>
    </div>
    </div>
    </div> {/* */}
    <div className='formdata'>

        <form action="" onSubmit={handleSubmit}>

            <div>

                <input type="text" name="email" id="email" className='input-box' value={formData.email} placeholder="Email / SSO Id" onChange={handleChange} required={true}/>
                <hr/>
            </div>

            <div>

                <input type="password" name="password" id="passw"className='input-box' value={formData.password} placeholder="Password" onChange={handleChange} required={true}/>
                <hr/>
            </div>  

            <div>

          <button type="submit" className="login-btn" style={{color:"black"}}>Log In</button>

            </div>

        </form>

    </div>

    {/* </div> */}

    </React.Fragment>
)}

export default LoginPage;