function header({ openMenu, setOpenMenu }) {
  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <div className="header" id="Header" style={style.header}>
      <a onClick={handleMenu}> Abrir Menu</a>
    </div>
  );
}

export default header;

const style = {
  header: {
    position: "absolute",
    width: "100%",
    height: "100px",
    background: "green",
    zIndex: "8",
  },
};
