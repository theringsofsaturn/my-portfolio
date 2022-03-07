import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";
import { FaGoodreads, FaGooglePay } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/theringsofsaturn" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/emilian-kasemi/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://play.google.com/store/apps/dev?id=6201646843189478498"
        target="_blank"
      >
        <FaGooglePay />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/the_rings_of_saturn/" target="_blank">
        <BsInstagram />
      </a>
    </div>
    {/* <div>
      <a
        href="https://www.facebook.com/profile.php?id=822108974"
        target="_blank"
      >
        <BsFacebook />
      </a>
    </div> */}
    <div>
      <a
        href="https://www.goodreads.com/user/show/140785582-emilian-kasemi"
        target="_blank"
      >
        <FaGoodreads />
      </a>
    </div>
    <div>
      <a
        href="https://www.youtube.com/channel/UCMhhk4PwFN5brZJks8Nr4aQ"
        target="_blank"
      >
        <BsYoutube />
      </a>
    </div>
  </div>
);

export default SocialMedia;
