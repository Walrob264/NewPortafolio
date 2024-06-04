import { useNavigate } from "react-router-dom";
import "./style/Header.css";
import { useTranslation } from "react-i18next";

function header({ openMenu, setOpenMenu }) {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  function redirectionHome() {
    if (openMenu == true) {
      setOpenMenu(!openMenu);
      navigate(`/`);
    }
    navigate(`/`);
  }
  return (
    <div style={style.header} className="header" id="Header">
      <div style={style.symbolHeader}>
        <i
          onClick={redirectionHome}
          className="bx bx-home-alt-2"
          style={{ cursor: "pointer" }}
        ></i>
        {openMenu && <i>Walter M.</i>}
      </div>

      <div style={style.symbolHeader}>
        <i
          onClick={() =>
            i18n.language == "en"
              ? i18n.changeLanguage("es")
              : i18n.changeLanguage("en")
          }
          style={{
            paddingRight: "2em",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="changeLenguage"
        >
          {i18n.language == "en" ? "Es" : "En"}
        </i>
        <i
          onClick={handleMenu}
          className="bx bx-menu"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
}

export default header;

const style = {
  header: {
    position: "absolute",
    width: "100%",
    height: "100px",
    zIndex: "8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    paddingTop: "10em",
  },
  symbolHeader: {
    display: "flex",
    margin: "5em",
    fontSize: "2.5rem",
    gap: "1em",
    justifyContent: "center",
    alignItems: "center",
  },
};
