
import { FaFacebookSquare,FaTwitter ,FaInstagramSquare  } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold  mb-3">Find Us On</h2>
            <div>
                <div className="join *:bg-white flex join-vertical *:justify-start">
                    <button className="btn join-item"><FaFacebookSquare />
                    Facebook</button>
                    <button className="btn join-item"><FaTwitter />
                    Twitter</button>
                    <button className="btn join-item"><FaInstagramSquare />
                    Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;