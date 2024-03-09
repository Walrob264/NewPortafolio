import React from "react";
function informationForMe() {
  return (
    <div
      className="informationForMe"
      id="informationForMe"
      style={style.informationForMe}
    >
      <h1>
        Me dicen Walter Medina, <br />
        pero soy Desarrollador IOS y Web Full Stack{" "}
      </h1>
    </div>
  );
}

export default informationForMe;

const style = {
  informationForMe: {
    height: "100vh",
    widht: "100%",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
  },
};
