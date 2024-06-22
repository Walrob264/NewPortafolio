import { useTranslation } from "react-i18next";

function AboutMe() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div style={style.container}>
        <div style={style.body}>
          <div style={style.containtImg}>
            <img style={{ width: "450px" }} src="../walter.jpg" alt="" />
          </div>
          <h1
            style={{
              fontSize: "2.5em",
              padding: "0.5em",
              marginBottom: "-0.5em",
            }}
          >
            Walter Medina
          </h1>
          <p style={{ fontSize: "1.5em" }}>
            {t(
              i18n.language == "es"
                ? "presentacion.presentacion"
                : "presentation.presentation"
            )}
          </p>
        </div>
      </div>
    </>
  );
}

const style = {
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute ",
    minWidth: "1200px",
  },
  body: {
    color: "white",
    width: "60%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  },
  containtImg: {
    width: "30%",
    minWidth: "450px",
    overflow: "hidden",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
    webkitBoxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
    mozBoxShadow: "0px 1px 19px 5px rgba(255,255,255,0.66)",
  },
};

export default AboutMe;
