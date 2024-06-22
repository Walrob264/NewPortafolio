import "../components/style/Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div style={style.container}>
        <div style={style.header}>
          <h1>
            {t(i18n.language == "es" ? "contacto.titulo" : "contact.title")}
          </h1>
        </div>
        <hr
          style={{
            width: "80%",
            marginLeft: "0",
          }}
        />
        <div style={style.body}>
          <div className="links" style={style.containtContacts}>
            <h2>Email</h2>
            <div>
              <a style={style.links} href="mailto:">
                <i
                  style={{ fontSize: "1.2em", paddingRight: "0.2em" }}
                  class="bx bxl-gmail"
                ></i>
                waltermedinaberrios@gmail.com
              </a>
              <div className="rectangle"></div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <h2>
              {t(
                i18n.language == "es"
                  ? "contacto.redesSociales"
                  : "contact.socialMedia"
              )}
            </h2>
            <div style={style.containtContacts}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "0.7em",
                marginLeft: "1.5em",
                gap: "1em",
              }}
            >
              <div className="links">
                <a
                  style={style.links}
                  href="https://www.linkedin.com/in/walter-medina-berrios-90008627b/"
                >
                  <i style={style.icons} class="bx bxl-linkedin-square"></i>
                  Linkendin
                </a>
                <div className="rectangle"></div>
              </div>
              <div className="links">
                <a
                  style={style.links}
                  href="https://www.facebook.com/walter.medinaberrios"
                >
                  <i
                    style={style.icons}
                    href="https://www.facebook.com/walter.medinaberrios"
                    class="bx bxl-facebook-circle"
                  ></i>
                  Facebook
                </a>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const style = {
  container: {
    display: "flex",
    width: "80%",
    height: "80%",
    justifyContent: "end",
    alignItems: "start",
    position: "absolute ",
    minWidth: "1200px",
    flexDirection: "column",
    marginLeft: "20%",
    marginTop: "4%",
  },
  header: {
    color: "white",
    paddingBottom: "1em",
  },
  body: {
    color: "white",
    width: "60%",
    height: "70%",
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    gap: "1em",
    minWidth: "1000px",
  },
  containtContacts: {
    display: "flex",
    gap: "1.5em",
    fontSize: "1.2rem",
    alignItems: "end",
  },
  links: {
    color: "white",
    textDecoration: "none",
    paddingLeft: "0.3em",
    fontSize: "1.2em",
  },
  icons: {
    fontSize: "2em",
    paddingRight: "0.2em",
  },
};

export default Contact;
