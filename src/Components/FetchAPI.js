import "./FetchAPI.css"
import { Outlet, Link, useNavigate } from "react-router-dom";




const FetchAPI = () => {

    let history = useNavigate()


    const handleLogin = () => {

        let emailData = document.querySelector(".email");
        let passwordData = document.querySelector(".password");

        if (emailData.value == "kamleshm1999@gmail.com" && passwordData.value) {
            history("/page")
        } else if (emailData.value == "" && passwordData.value == ""){
            alert("please enter ur email and password")
        }
         else {
            emailData.value = ""
            passwordData.value = ""
            alert("invalid credentials")
        }
    }

    return (
        <div className='container'>
            <div className='form'>
                <h1 className='heading'>Login Page</h1>
                <input type="email" className='email' placeholder='Your email-id' />
                <input type="password" className='password' placeholder='Your 8-digit password' />
                <Link to="/"></Link>
                <button className="login" onClick={() => { handleLogin() }}>Login</button>
                {/* <Link className='login' to="/page" >Login</Link> */}
                <Outlet />
            </div >
        </div>
    )
}

export default FetchAPI