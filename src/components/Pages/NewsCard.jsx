

import { FaRegBookmark } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";


const NewsCard = (props = {}) => {
    const {singleNews} = props || {};
  return (
    <div className="card bg-base-100 border rounded-md p-3 ">
      {/* Author Info */}
      <div className="flex justify-between items-center px-4 py-2   bg-base-200 rounded-md">
      <div className="flex justify-center items-center">
      <img
          src={singleNews.author.img}
          alt={singleNews.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-semibold">{singleNews.author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(singleNews.author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>
        <div className="flex gap-2">
          <button className="">
          <FaRegBookmark />
          </button>
          <button className="">
          <IoMdShare />

          </button>
        </div>
      </div>

      {/* Thumbnail */}
      <img
        src={singleNews.thumbnail_url}
        alt={singleNews.title}
        className="w-full md:h-72 lg:h-96  object-cover"
      />

      {/* Article Details */}
      <div className="card-body p-0">
        <h3 className="card-title">{singleNews.title}</h3>
        <p className="text-sm text-gray-700">
          {singleNews.details.substring(0, 100)}...{" "}
          <span className="text-primary cursor-pointer">Read More</span>
        </p>

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-500"
                  checked={i + 0.5 === singleNews.rating.number}
                  readOnly
                />
              ))}
            </div>
            <span className="ml-2 text-sm">{singleNews.rating.number}</span>
          </div>
          <span className="text-sm text-gray-500">
           👁️‍🗨️  {singleNews.total_view}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
