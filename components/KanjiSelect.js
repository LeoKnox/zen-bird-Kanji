import { singleKanji } from "./N5Kanji.js";
import { useState } from "react";
import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  const [target, setTarget] = useState(
    singleKanji(Math.floor(Math.random() * kanjiList.length))
  );
  return (
    <>
      <button>-</button>
      <button>Random</button>
      <button>+</button>
      <p>Target:{target.Furigana}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {kanjiList.map((v, i) => (
          <label
            className="kanjiPractice"
            style={{
              flex: "0 0 calc((100% - 12px * 4) / 5)",
              whiteSpace: "nowrap",
            }}
          >
            {singleKanji(i).Furigana}
          </label>
        ))}
      </div>
    </>
  );
};
