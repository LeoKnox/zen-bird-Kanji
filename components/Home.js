import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";
import KanjiHover from "./KanjiHover.js";

export default Home = () => {
  const [kanjiList, setKanjiList] = useState([]);
  const [hoverKanji, setHoverKanji] = useState(null);
  const updateKanjiList = (e) => {
    e.target.checked
      ? setKanjiList([...kanjiList, e.target.value])
      : setKanjiList((kanji) =>
          kanji.filter((index) => e.target.value !== index)
        );
  };
  const OnHover = (props) => {
    return (
      <div
        style={{
          zindex: 10,
          padding: "10px",
        }}
      >
        <label>
          {props.title}:{props.data}
        </label>
      </div>
    );
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>家</h2>
        <p
          style={{
            height: "1em",
          }}
        >
          {hoverKanji >= 0 && <OnHover title={hoverKanji} />}
        </p>
        <div
          className="kanjiWrapper"
          style={{ color: "green", fontWeight: "bold", display: "flex" }}
        >
          <div
            className="kanjiRow"
            style={{ overflow: "visible", display: "flex" }}
          >
            {N5Kanji.map((row, kanjiId) => (
              <div
                className="kanjiColumn"
                id={kanjiId}
                onMouseEnter={() => setHoverKanji(kanjiId)}
                onMouseLeave={() => setHoverKanji(null)}
              >
                <p>
                  <input
                    type="checkbox"
                    value={kanjiId}
                    onClick={(e) => updateKanjiList(e)}
                  />
                  {kanjiId}
                </p>
                {row.Kanji}
                <div
                  style={{
                    position: "relative",
                    flexDirection: "column",
                    verticalAlign: "top",
                    backgroundColor: "#802b00",
                    color: "tan",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "flex-start",

                    whiteSpace: "nowrap",
                    width: "max-content",
                    minWidth: "150px",
                    opacity: hoverKanji === kanjiId ? 1 : 0,
                    visibility: hoverKanji === kanjiId ? "visible" : "hidden",
                    pointerEvents: "none",

                    transition:
                      "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                    transitionDelay: hoverKanji === kanjiId ? "0.4s" : "0s",
                  }}
                >
                  {hoverKanji == kanjiId && (
                    <>
                      {Object.entries(row).map((data) => (
                        <div name="info">
                          <label
                            key={data}
                            style={{
                              display: "block",
                              padding: "8px",
                              textAlign: "left",
                              fontWeight: "bold",
                              fontSize: "1em",
                              overflow: "visible",
                            }}
                          >
                            {hoverKanji >= 0 && (
                              <OnHover title={data[0]} data={data[1]} />
                            )}
                          </label>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div
            className="sideBar"
            style={{
              display: "grid",
              alignContent: "start",
              flex: "0 0 0 1",
            }}
          >
            <p>Kanji</p>
            <label
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              {kanjiList}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
