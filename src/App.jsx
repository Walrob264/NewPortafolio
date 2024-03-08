import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InformationForMe from "./components/InformationForMe";
import NavBar from "./components/Navbar";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="container" style={styleApp.containter_body}>
        <Header openMenu={menuActive} setOpenMenu={setMenuActive} />
        <div className="body" style={styleApp.body}>
          <InformationForMe></InformationForMe>
        </div>
        <NavBar openMenu={menuActive} setOpenMenu={setMenuActive} />
      </div>
    </>
  );
}
export default App;

const styleApp = {
  containter_body: {
    background: "white",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "black",
  },
};
