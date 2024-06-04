import React, { useEffect, useState } from "react";
import WorkSelect from "./WorkSelect";
import { WorksArchive } from "../archives/workArchives";
function Works() {
  const works = WorksArchive;
  const [work, setwork] = useState({});
  const [hoveredWork, setHoveredWork] = useState(null);
  const [isWorkSelect, setisWorkSelect] = useState(false);

  function workSelected(Bool, workSelected) {
    setwork(workSelected);
    console.log(workSelected);
    setisWorkSelect(Bool);
  }

  return (
    <div style={style.container}>
      {isWorkSelect && (
        <WorkSelect
          work={work}
          isWorkSelect={isWorkSelect}
          setisWorkSelect={setisWorkSelect}
        />
      )}

      <div style={style.containerWorks}>
        {works.map((work, index) => (
          <div
            style={{
              ...style.workName,
              ...(hoveredWork === index && style.workNameVisible),
            }}
          >
            {hoveredWork === index && (
              <img src={work.image} alt="" style={style.workImg} />
            )}
          </div>
        ))}
      </div>
      <div style={style.containerWorks}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "2rem",
            fontWeight: "semiBold",
          }}
        >
          <h1>Work</h1>
          <h1> {works.length}</h1>
        </div>
        <div style={style.line} />
        {works.map((work, index) => (
          <div
            style={style.workDiv}
            key={index}
            onMouseEnter={() => setHoveredWork(index)}
            onMouseLeave={() => setHoveredWork(null)}
            onClick={() => workSelected(true, work)}
          >
            <div style={style.work}>
              <div>
                <i
                  style={
                    hoveredWork === index
                      ? style.chevronActivate
                      : style.chevron
                  }
                  className="bx bx-chevron-right"
                ></i>
                <i>{work.name}</i>
              </div>

              <i> {work.technology}</i>
            </div>

            <div style={style.line} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;

const style = {
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "end",
    position: "absolute ",
  },
  containerWorks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "35%",
    maxHeight: "70%",
    height: "70%",
    margin: "1em",
    color: "white",
    padding: " 0 1em",
  },
  workDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    cursor: "pointer",
  },
  work: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "1.5rem",
    padding: "1em 0",
  },
  workName: {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  workNameVisible: {
    opacity: 1,
  },
  line: {
    width: "100%",
    height: "2px",
    background: "white",
  },
  chevron: {
    transition: "transform 0.3s ease",
    transform: "translate(-110%, 0px)",
    color: "black",
  },
  chevronActivate: {
    transition: "transform 0.3s ease",
    transform: "translate(1%, 0px)",
  },
  workImg: {
    width: "100%",
    minWidth: "500px",
  },
};
