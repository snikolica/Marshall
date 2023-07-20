import styles from "~/styles/main.css";
import { AiFillCloseSquare } from "react-icons/ai";
import SidebarForm from "./SidebarForm";
import SideInfo from "./SideInfo";
import SideText from "./SideText";
import SideImg from "./SideImg";
function Sidebar({ toggleSide, side }) {
  let sidebar = side ? "sidebar-open " : "";

  return (
    <div className={`sidebar ${sidebar}`}>
      <AiFillCloseSquare className="close-side" onClick={toggleSide} />
      <SideText />
      <SideImg />
      <SideInfo />
      <div className="side-form">
        <SidebarForm />
      </div>
    </div>
  );
}

export default Sidebar;
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
