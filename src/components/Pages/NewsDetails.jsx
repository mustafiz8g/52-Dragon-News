import { useLoaderData } from "react-router-dom";
import Header from "../Header";
import Detail from "./Detail";
import RightNavbar from "../LayoutComponents/RightNavbar";



const NewsDetails = () => {
    const  { data: news } = useLoaderData();
   

    return (
        <div>
           <Header></Header>
          
          <div className="container mx-auto pt-4 grid md:grid-cols-12 gap-8 ">
            <div className="col-span-9">
            {
                news.map(detail => <Detail key={detail._id} detail = {detail}></Detail>)
            }
            </div>
            <aside className="col-span-3">
              <RightNavbar></RightNavbar>
            </aside>
          </div>



           {/* <div>
           
           </div> */}

        </div>
    );
};

export default NewsDetails;