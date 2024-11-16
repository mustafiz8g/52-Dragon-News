import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center p-2 bg-base-200">
           <p className="bg-red-700 text-white px-3 py-1">Latest</p>
           <Marquee pauseOnHover={true} className="space-x-10 bg-base-200">
    <Link to="/news">I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur quia cus.</Link>
    <Link to="/news">I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur quia cus.</Link>
    <Link to="/news">I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur quia cus.</Link>
</Marquee>
        </div>
    );
};

export default LatestNews;