import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Media() {
  return (
    <div className="media">
    <div className="media-text">
      <p>&copy; Marshall 2021, All right reserved</p>
    </div>
    <div className="icons">
      <FaTwitter className="tw" />
      <FaFacebookF className="fb" />
      <FaGooglePlusG className="gp" />
    </div>
  </div>
  )
}

export default Media
