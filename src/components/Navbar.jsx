import { Link } from "react-router-dom";

import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">

           <div className="">{user && <p>{user.displayName}</p>}</div>
           <div className="nav space-x-4">
             <Link to="/">Home</Link>
             <Link to="/career">Career</Link>
             <Link to="/about">About</Link>
           </div>

        

           <div className="login">
                <div className="flex items-center gap-3">
                   <div> 
                    {
                        user&& user?.email 
                         ? <div> 
                            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                         </div> 
                         : <img src={userIcon} alt="" />
                    }
                   </div>
                   {
                    user && user?.email ?  <Link onClick={logOut} className="btn px-8 text-lg btn-neutral">Log Out</Link> :  <Link to="/auth/login" className="btn px-8 text-lg btn-neutral">Log In</Link>
                   }
                   
                </div>
           </div>
        </div>
    );
};
Link
export default Navbar;