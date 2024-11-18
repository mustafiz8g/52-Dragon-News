import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";





const Register = () => {

    const { createNewUser,setUser , updateUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const [error, setError] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name');
        if(name.length < 4){
            setError({...error , name : 'must be more than 4 character long'});
            return;
        }
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        // console.log(name,email,photo,password)

        createNewUser(email,password)
        .then(result => {
            const user = result.user;
            setUser(user)
            updateUser({
                displayName: name, 
                photoURL : photo
            })
            .then(() => {
                navigate('/')
            })
        })
        .catch(err => {
            // console.log('Error::::', error.code , error.message)

        })

    }

    return (
        <div className="container mx-auto *:space-y-4 border p-9 rounded-lg bg-white w-96">

            <h2 className="font-semibold text-lg text-center">Register Your Account</h2>
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
             Name
                <input 
                name ="name" 
                type="text" 
                className="grow" 
                         placeholder="daisy@site.com" />
            </label>
            {
                error.name && <p>{error.name}</p>
            }
             <label className="input input-bordered flex items-center gap-2">
                Photo url
                <input 
                 name="photo"
                 type="text"
                 className="grow"
                 placeholder="@site.com" />
            </label>
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
           
          

            <button className="btn w-full btn-active btn-neutral">Register</button> 
            </form>

            <p><small>Already Have an account? <Link className="text-red-600" to='/auth/login'>Login </Link></small></p>

        </div>
    );
};

export default Register;