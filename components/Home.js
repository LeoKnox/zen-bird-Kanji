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
          {kanjiList}
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
                {hoverKanji == kanjiId && (
                  <>
                    {Object.entries(row).map((data) => (
                      <div name="info" style={{ display: "flex" }}>
                        <label
                          key={data}
                          style={{
                            padding: "8px",
                            textAlign: "left",
                            fontWeight: "bold",
                            fontSize: "1em",
                            textAlign: "left"
                          }}
                        >
                          <ul>
                            <li>
                              {data[0]}:{data[1]}
                            </li>
                          </ul>
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </td>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
