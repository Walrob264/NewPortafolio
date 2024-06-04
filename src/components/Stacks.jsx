import React, { useState } from "react";
import "../components/style/Stack.css";

function Stacks() {
  const stacks = [
    { name: "React", icon: "bx bxl-react", color: "blue" },
    { name: "JavaScript", icon: "bx bxl-javascript", color: "yellow" },
    { name: "Node.js", icon: "bx bxl-nodejs", color: "white" },
    { name: "SwiftUI", icon: "", color: "white" },
    { name: "CSS", icon: "bx bxl-css3", color: "red" },
    { name: "HTML", icon: "bx bxl-html5", color: "orange" },
    { name: "GitHub", icon: "bx bxl-github", color: "white" },
  ];

  const [indexStack, setIndexStack] = useState(Math.ceil(stacks.length / 2));
  const [dragStartX, setDragStartX] = useState(null);

  const selectCurrentButton = (index) => setIndexStack(index);

  const Buttons = () => {
    return stacks.map((_, i) => (
      <input
        key={i + 1}
        type="button"
        position={i + 1}
        style={i + 1 !== indexStack ? style.navInput : style.activeButton}
        onClick={() => selectCurrentButton(i + 1)}
      />
    ));
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.name);
    console.log(item);
  };

  const handleDragStart = (evt) => {
    setDragStartX(evt.clientX);
    const img = new Image();
    img.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgcBApPI2eMAAAAASUVORK5CYII=";
    evt.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDragEnd = (evt) => {
    const dragEndX = evt.clientX;
    const dragDistance = dragEndX - dragStartX;
    const threshold = 100;

    if (dragDistance > threshold && indexStack > 1) {
      setIndexStack(indexStack - 1);
    } else if (dragDistance < -threshold && indexStack < stacks.length) {
      setIndexStack(indexStack + 1);
    }
    setDragStartX(null);
  };

  return (
    <div style={style.container}>
      <div style={style.mainSection}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>My Stacks</h1>

          <div
            style={style.carouselContent}
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={(evt) => evt.preventDefault()}
          >
            <div style={style.cardsContent}>
              <main id="carousel">
                {stacks.map((stack, index) => (
                  <div
                    key={index}
                    className={`item pos${indexStack}`}
                    onClick={() => selectCurrentButton(index + 1)}
                  >
                    <div className="heard__card">
                      <h1>{stack.name}</h1>
                    </div>
                    <div className="body__card">
                      {stack.icon ? (
                        <i
                          style={{ fontSize: "15em", color: "white" }}
                          className={stack.icon}
                        ></i>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="250"
                          height="250"
                          viewBox="0 0 50 50"
                        >
                          <path
                            d="M35.818,5H14.182C9.119,5,5,9.119,5,14.182v21.637C5,40.881,9.119,45,14.182,45h21.637C40.881,45,45,40.881,45,35.818V14.182C45,9.119,40.881,5,35.818,5z M36.652,35.946c-1.41-2.523-3.043-2.598-4.75-1.93s-3.563,1.633-6.605,1.781c-8.684,0.52-12.23-4.989-14.234-7.735c7.867,4.824,12.379,2.094,14.457,1.426c-5.492-3.34-12.023-13.211-12.023-13.211s7.645,6.012,10.02,7.645C22.18,22.586,18.336,17.375,17,15c1.855,2.152,10.078,8.774,12.305,10.258c0.977-5.727-0.227-8.071-2.305-12.227c9.996,7.062,7.648,16.012,7.648,16.012C37.023,31.493,36.949,33.645,36.652,35.946z"
                            fill="#FFFFFF"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="footer__card"></div>
                  </div>
                ))}
              </main>
              <div style={style.buttonGroups}>
                <Buttons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stacks;

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  mainSection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  carouselContent: {
    minHeight: "500px",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  cardsContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navInput: {
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    border: "none",
  },
  activeButton: {
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    backgroundColor: "gray",
    border: "none",
  },
  buttonGroups: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-20px",
  },
};
