import "../components/style/NavBar.css";
export default function OptionsMenu({ title }) {
  return (
    <div
      className="options-navbar"
      style={{
        display: "flex",
        color: "#c2c2c2",
        fontSize: "1.5em",
        transition: "all 0.5s",
        cursor: "pointer",
        padding: "0.5em 0em",
        width: "60%",
        justifyContent: "flex-start",
      }}
    >
      <h1
        style={{
          cursor: "pointer",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
