import "./style/Header.css";

function header({ openMenu, setOpenMenu }) {
  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  function redirectionHome() {
    if (openMenu == true) {
      setOpenMenu(!openMenu);
    }
  }
  return (
    <div style={style.header} className="header" id="Header">
      <i
        style={style.symbolHeader}
        onClick={redirectionHome}
        class="bx bx-home-alt-2"
      ></i>
      <i onClick={handleMenu} style={style.symbolHeader} class="bx bx-menu"></i>
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
    margin: "5em",
    fontSize: "2.5rem",
    cursor: "pointer",
  },
};
