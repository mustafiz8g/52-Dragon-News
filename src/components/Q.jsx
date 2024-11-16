
import swim from "../assets/swimming.png"
import clasS from "../assets/class.png"
import play from "../assets/playground.png"

const Q = () => {
    return (
        <div className="bg-[#F3F3F3] p-3  ">
            <h2 className="font-semibold mb-3">Q-Zone</h2>
            
             <div className="flex flex-col items-center gap-3">
             <img src={swim} alt="" />
                <img src={clasS} alt="" />
                <img src={play} alt="" />
             </div>
           
        </div>
    );
};

export default Q;