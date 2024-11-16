import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import Q from "../Q"


const RightNavbar = () => {
    return (
        <div className="space-y-3">
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
          <Q></Q>
          
        </div>
    );
};

export default RightNavbar;