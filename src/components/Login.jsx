import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";




const Login = () => {

    const {loginUser,setUser} = useContext(AuthContext);

    const [error, setError] = useState({})
    
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target)
       
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email,password)

        loginUser(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : '/')
            // console.log(user)
        })
        .catch(err => {
        //   alert( error.code , )
        setError({...error,login : err.code})
        })
    }
    return (
        <div className="container mx-auto *:space-y-4 border p-9 rounded-lg bg-white w-96">

            <h2 className="font-semibold text-lg text-center">Login Your Account</h2>
           <form onSubmit={handleSubmit}>
           <label className="input input-bordered flex items-center gap-2">
                Email
                <input 
                name="email" 
                type="email" 
                className="grow"
                 placeholder="daisy@site.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Password
                <input 
                name="password" 
                type="password" 
                className="grow" 
                placeholder="ILoveYou" />
            </label>
            {
                error.login && <p className="text-red-600">{error.login}</p>
            }
            <button className="btn w-full btn-active btn-neutral">Login</button> 
           </form>
           

            <p><small>Dont't Have an account? <Link className="text-red-600" to='/auth/register'>Register</Link></small></p>

        </div>
    );
};

export default Login;