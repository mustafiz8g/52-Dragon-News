import { Link } from "react-router-dom";




const Detail =  (props = {}) => {
    const {detail} = props || {};
    const {
        title,
        details,
        thumbnail_url,
        author: { name, published_date, img },
        total_view,
        rating: { number, badge },
      } = detail;
    

    

      return (
        <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Thumbnail */}
          <img  src={thumbnail_url} alt="Thumbnail" className="w-full h-[700px]" />
    
          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-3 text-gray-800">{title}</h1>
    
            {/* Details */}
            <p className="text-gray-600 text-sm mb-4">{details}</p>
    
            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-full border border-gray-200"
                />
                <div>
                  <p className="text-gray-800 font-medium">{name}</p>
                  <p>{new Date(published_date).toLocaleDateString()}</p>
                </div>
              </div>
    
              {/* Views and Rating */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                 
                  <span>{total_view} views</span>
                </div>
                <div className="flex items-center space-x-1">
                
                  <span>
                    {number} ({badge})
                  </span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer Button */}
          <div className="p-4 border-t">
            <Link to={`/category/${detail.category_id}`}  className="btn btn-outline btn-primary w-full">
              All news in this category
            </Link>
          </div>
        </div>
      );
};

export default Detail;