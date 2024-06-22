import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InformationForMe from "./components/InformationForMe";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Works from "./components/Works";
import Carousel from "./components/Stacks";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [time, setTime] = useState(2);
  const [loaded, setLoaded] = useState(false);

  const getTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);
    if (time === 0) {
      setLoaded(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  return loaded ? (
    <div className="container" style={styleApp.container_body}>
      <Header openMenu={menuActive} setOpenMenu={setMenuActive} />
      <Routes>
        <Route
          path="/"
          className="body"
          style={styleApp.body}
          element={<InformationForMe openMenu={menuActive} />}
        ></Route>
        <Route path="/works" element={<Works />} />
        <Route path="/stacks" element={<Carousel />}></Route>
        <Route path="/aboutMe" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <NavBar openMenu={menuActive} setOpenMenu={setMenuActive} />
    </div>
  ) : (
    <Loading />
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
    display: "flex",
  },
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
