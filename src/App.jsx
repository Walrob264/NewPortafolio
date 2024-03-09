import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InformationForMe from "./components/InformationForMe";
import NavBar from "./components/Navbar";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="container" style={styleApp.container_body}>
      <Header openMenu={menuActive} setOpenMenu={setMenuActive} />
      <div className="body" style={styleApp.body}>
        <InformationForMe></InformationForMe>
      </div>
      <NavBar openMenu={menuActive} setOpenMenu={setMenuActive} />
    </div>
  );
}
export default App;

const styleApp = {
  container_body: {
    background: "black",
    height: "100vh",
    maxWidth: "100%",
    position: "relative",
    overflow: "hidden",
  },
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
