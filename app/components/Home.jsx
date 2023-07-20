import Modal from "~/components/Modal";
import { FaInfo } from "react-icons/fa";
import { GrSidebar } from "react-icons/gr";
import styles from "~/styles/main.css";

function Home({ open, setOpen, toggleSide, side, setSide }) {
  let moveBox = side ? "box-move " : "";

  const closeDark = () => {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("sidebar-open")) {
      toggleSide();
      setOpen((prev) => {
        return !prev;
      });
    }
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`box ${moveBox}`}>
      <div className="box-rotate">
        <div className="img">
          <img src="./img/logo-dark.png" alt="" />
        </div>
        <div className="text-animation">
          <span className="animation  text-in">
            <h1>
              AGENCY <span className="and">&</span> <br />
              ONLINE BUSINESS{" "}
              <span className="italic">
                <br /> SOLUTIONS.
              </span>
            </h1>
          </span>

          <span className="animation">
            <h1>
              CREATIVE <span className="and">&</span> <br />
              MODERN TEMPLATE
              <span className="italic">
                <br /> SOLUTIONS.
              </span>
            </h1>
          </span>

          <span className="animation">
            <h1>
              AGENCY <span className="and">&</span> <br />
              BUSINESS DESIGN
              <span className="italic">
                <br /> SOLUTIONS.
              </span>
            </h1>
          </span>

          <span className="animation">
            <h1>
              UNIQUE <span className="and">&</span> <br />
              FULLY RESPONSIVE
              <span className="italic">
                <br /> SOLUTIONS.
              </span>
            </h1>
          </span>
        </div>
        <div className="buttons">
          <div className="btn-box">
            <button className="btn light" onClick={closeDark}>
              Notify Us
            </button>
            {!open && <Modal closeDark={closeDark} />}
          </div>
          <button className="btn information" onClick={toggleSide}>
            <FaInfo /> Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
