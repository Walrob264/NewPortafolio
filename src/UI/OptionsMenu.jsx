import "../components/style/NavBar.css";
import { useNavigate } from "react-router-dom";

export default function OptionsMenu({
  title,
  navigateRoutes,
  openMenu,
  setOpenMenu,
}) {
  const navigate = useNavigate();
  function navigationRoutes() {
    handleMenu();
    navigate(`/${navigateRoutes}`);
  }
  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <div className="options-navbar">
      <i
        onClick={navigationRoutes}
        style={{
          cursor: "pointer",
          fontSize: "3rem",
          transition: "all 1s",
          marginLeft: "0.2em",
        }}
      >
        {title}
      </i>
    </div>
  );
}
