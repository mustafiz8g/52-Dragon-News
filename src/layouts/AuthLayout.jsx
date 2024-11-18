import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";




const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]"> 
             <header className="container mx-auto py-4">
                <Navbar></Navbar>
             </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;