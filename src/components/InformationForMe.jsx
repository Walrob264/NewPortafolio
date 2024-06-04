import React from "react";

import { useTranslation } from "react-i18next";
function informationForMe({ openMenu }) {
  const [t, i18n] = useTranslation("global");
  return (
    <div
      className="informationForMe"
      id="informationForMe"
      style={
        openMenu ? style.informationForMeAnimation : style.informationForMe
      }
    >
      <h1>
        {t(i18n.language == "en" ? "home.presentation" : "hogar.presentacion")
          .split("\n")
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </h1>
    </div>
  );
}

export default informationForMe;

const style = {
  informationForMe: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
  },
  informationForMeAnimation: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    transition: "all 1s",
    transform: "translate(110%, 0px)",
  },
};
