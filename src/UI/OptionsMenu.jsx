import "../components/style/NavBar.css";
export default function OptionsMenu({ title }) {
  return (
    <div className="options-navbar">
      <i
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
