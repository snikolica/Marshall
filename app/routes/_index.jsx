export const meta = () => {
  // todo: text for ACK
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa";

import styles from "~/styles/main.css";
import Modal from "~/components/Modal";
import Media from "../components/Media";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";

export default function Index() {
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(1);
  const [side, setSide] = useState(false);

  function toggleSide() {
    setSide((prev) => !prev);
    // todo: ovo je stari vanilla js nacin, react-izirati ovo
    // let sidebar = document.querySelector(".sidebar");
    // let box = document.querySelector(".box");
    // let skyBox = document.querySelector(".sky-box");
    // box.classList.toggle("box-move");
    // sidebar.classList.toggle("sidebar-open");
  }

  if (typeof window !== "undefined") {
    const texts = document.querySelectorAll(".animation");
    let textsLen = texts.length;

    const textOutTimer = 2200;

    setTimeout(function () {
      texts[0].classList.add("text-out");
    }, textOutTimer);

    function animateText() {
      texts.forEach((text) => {
        text.classList.remove("text-in", "text-out");
      });

      if (count === textsLen - 1) {
        setCount(0);
      } else {
        setCount((prev) => {
          return prev + 1;
        });
      }

      texts[count].classList.add("text-in");

      setTimeout(function () {
        texts[count].classList.add("text-out");
      }, textOutTimer);
    }

    useEffect(() => {
      const int = setInterval(animateText, 3000);
      return () => {
        clearInterval(int);
      };
    }, [count]);
  }

  return (
    <>
      <div className="background"></div>
      <div className="sky">
        <div className="sky-box">
          <Home
            open={open}
            setOpen={setOpen}
            toggleSide={toggleSide}
            side={side}
          />
          <Sidebar toggleSide={toggleSide} side={side} setSide={setSide} />
        </div>

        <Media />
      </div>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
