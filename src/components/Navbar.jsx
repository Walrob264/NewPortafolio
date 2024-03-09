import React, { useEffect } from "react";
import OptionsMenu from "../UI/OptionsMenu";

function NavBar({ openMenu, setOpenMenu }) {
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
      ></div>
      <div style={styleNavBar.containerOptions}>
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
    justifyContent: "center",
    alignItems: "center",
    background: "Black",
    width: "100%",
    height: "100%",
    transition: "all 1s",
    position: "absolute",
    zIndex: "7",
  },
  navBarExit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s",
    transform: "translate(-110%, 0px)",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  containerOptions: {
    height: "50%",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
  },
};
