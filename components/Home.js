import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";

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
    //setHoverKanji(props.kanjiId);
    return (
      <div
        style={{
          zindex: 10,
        }}
      >
        <p>
          {props.title}:{props.data}
        </p>
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
          {hoverKanji >= 0 && <OnHover title={hoverKanji} />}?
        </p>
        <table>
          <tbody>
            {N5Kanji.map((row, kanjiId) => (
              <td
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
                    position: "absolute",
                    display: "inline-block",
                    verticalAlign: "top",
                    backgroundColor: "gray",
                    opacity: "80%",
                  }}
                >
                  {hoverKanji == kanjiId && (
                    <>
                      {Object.entries(row).map((data) => (
                        <div
                          name="info"
                          style={{ overflow: "visible", display: "flex" }}
                        >
                          <label
                            key={data}
                            style={{
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
              </td>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
