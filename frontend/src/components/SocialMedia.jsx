import { BsYoutube, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGoodreads } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsInstagram />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsYoutube />
    </div>
    <div>
      <FaGoodreads />
    </div>
  </div>
);

export default SocialMedia;
