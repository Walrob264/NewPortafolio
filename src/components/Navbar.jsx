import React from "react";
import OptionsMenu from "../UI/OptionsMenu";
import { useTranslation } from "react-i18next";

function NavBar({ openMenu, setOpenMenu }) {
  const [t, i18n] = useTranslation("global");
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
        <OptionsMenu
          title={t(
            i18n.language == "en" ? "navbar.works" : "barraNavegacion.trabajos"
          )}
          navigateRoutes={"works"}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <OptionsMenu
          title={t(
            i18n.language == "en"
              ? "navbar.stack"
              : "barraNavegacion.habilidades"
          )}
          navigateRoutes={"stacks"}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <OptionsMenu
          title={t(
            i18n.language == "en"
              ? "navbar.contact"
              : "barraNavegacion.contacto"
          )}
          navigateRoutes={"contact"}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <OptionsMenu
          title={t(
            i18n.language == "en" ? "navbar.aboutMe" : "barraNavegacion.sobreMi"
          )}
          navigateRoutes={"aboutMe"}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
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
