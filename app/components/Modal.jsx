import { GrFormClose } from "react-icons/gr";
import styles from "~/styles/main.css";

export default function Modal({ closeDark }) {
  return (
    <div className="modal">
      <div className="modal-box">
      <GrFormClose className="close" onClick={closeDark} />
        <div className="modal-img">
          <img src="./img/envelope.png" className="koverta" alt="" />
        </div>
  
        <div className="modal-text">
        <h2>Sign up</h2>
        <p>Be first to know about the latest updates and get <br /> exclusive offer on our grand opening</p>
        </div>
        <div className="forma">
            <form>
                <input type="text" placeholder="Your Email" className="mail"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
      </div>

    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
