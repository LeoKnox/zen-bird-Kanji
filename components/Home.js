import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";

export default Home = () => {
  const [kanjiList, setKanjiList] = useState([]);
  const updateKanjiList = (e) => {
    e.target.checked
      ? setKanjiList([...kanjiList, e.target.value])
      : setKanjiList((kanji) =>
          kanji.filter((_, index) => e.target.value !== index)
        );
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>家</h2>
        <p>{kanjiList}</p>
        <table>
          <tbody>
            {N5Kanji.map((row, kanjiId) => (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    value={kanjiId}
                    onClick={(e) => updateKanjiList(e)}
                  />
                  {kanjiId}
                </td>
                {Object.entries(row).map((data) => (
                  <td
                    key={data}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "1em",
                    }}
                  >
                    {data[0]}:{data[1]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
