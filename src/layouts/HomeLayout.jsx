import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>
            <Header></Header>
           <section className="container mx-auto">
            <LatestNews></LatestNews>
           </section>
          
           </header>
           <nav className="container mx-auto py-4">
             <Navbar></Navbar>
           </nav>

           <main className="container mx-auto pt-4 grid md:grid-cols-12 gap-3 ">
            <aside className="left  col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className="col-span-6">
                <h2 className="font-medium">Dragon News Home</h2>
                <Outlet></Outlet>
            </section>
            <aside className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
           </main>
        </div>
    );
};

export default HomeLayout;