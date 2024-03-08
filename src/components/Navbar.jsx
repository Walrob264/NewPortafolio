import React, { useEffect } from "react";
import OptionsMenu from "../UI/OptionsMenu";

function NavBar({ openMenu, setOpenMenu }) {
  useEffect(() => {}, []);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div
      className="navBar"
      style={openMenu ? styleNavBar.navBar : styleNavBar.navBarExit}
    >
      <div
        className="header-navbar"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <i
          onClick={handleMenu}
          className="bx bx-x"
          style={{
            color: "white",
            fontSize: "50px",
            cursor: "pointer",
            padding: "0.2em",
            transition: "all 0.5s",
          }}
        ></i>
      </div>
      <div
        style={{
          padding: "0em 1.5em",
        }}
      >
        <OptionsMenu title={"Experience"} />
        <OptionsMenu title={"Works"} />
        <OptionsMenu title={"Stack"} />
        <OptionsMenu title={"Contact"} />
        <OptionsMenu title={"Prueba"} />
      </div>
    </div>
  );
}

export default NavBar;

const styleNavBar = {
  navBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "display-start", // Esto debería ser "flex-start" en lugar de "display-start"
    alignItems: "start",
    background: "Black",
    width: "30%",
    height: "100%",
    transition: "all 1s",
    position: "absolute",
  },
  navBarExit: {
    transform: "translate(-110%, 0px)",
    transition: "all 1s",
    position: "absolute",
  },
};
