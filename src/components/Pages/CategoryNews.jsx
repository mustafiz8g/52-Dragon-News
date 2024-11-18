import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";



const CategoryNews = () => {
    const  { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
             <h2 className="font-medium">Dragon News Home</h2>
           <p> category total {news.length}</p>
    <div className="space-y-3">
        {
            news.map(singleNews => <NewsCard singleNews = {singleNews} key={singleNews._id}></NewsCard>)
        }
    </div>

        </div>
    );
};

export default CategoryNews;


