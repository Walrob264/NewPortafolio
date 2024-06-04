function WorkSelect({ work, isWorkSelect, setisWorkSelect }) {
  const workSelect = work;
  function hanldeWorkSelect() {
    setisWorkSelect(!isWorkSelect);
  }
  return (
    <>
      <div style={style.container}>
        <div style={style.header}>
          <a href=""></a>
          <h1>{workSelect.name}</h1>
          <i
            style={style.iconClose}
            onClick={() => hanldeWorkSelect()}
            class="bx bx-x"
          ></i>
        </div>
        <div style={style.body}>
          <div style={style.text}>
            <p>{work.description}</p>
            <ul>
              {work.characteristics.map((characteristic, index) => (
                <li
                  style={{
                    padding: "0.2em",
                    fontSize: "1.4em",
                  }}
                  key={index}
                >
                  <strong> {characteristic.title} </strong>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div style={style.workImg}>
            <img
              src={work.image}
              alt=""
              style={{
                width: "140%",
                marginLeft: "-25%",
                marginTop: "-10%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  container: {
    width: "80%",
    height: "90%",
    background: "rgba(22, 22, 21, 0.95)",
    position: "absolute",
    zIndex: "8",
    marginBottom: "2%",
    borderRadius: "2em",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
    webkitBoxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
    mozBoxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    margin: "1em",
    fontSize: "1.4em",
  },

  iconClose: {
    fontSize: "3em",
    cursor: "pointer",
  },
  body: {
    display: "flex",
    color: "white",
    fontSize: "1.5em",
    justifyContent: "center",
    aligItems: "center",
    height: "100%",
    textAlign: "left",
  },
  workImg: {
    width: "50%",
    minWidth: "500px",
    height: "80%",
  },
  text: {
    width: "50%",
    padding: "0em 1em",
    marginLeft: "5%",
    marginTop: "2%",
  },
};

export default WorkSelect;
