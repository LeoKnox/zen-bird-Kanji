import { singleKanji } from "./N5Kanji.js";
import { useState, useEffect, useRef } from "react";
import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  const clickTimeoutRef = useRef(null);
  const [active, setActive] = useState(0);
  const [practiceDisplay, setPracticeDisplay] = useState("Kanji");
  const [find, setFind] = useState(
    Math.floor(Math.random() * kanjiList.length)
  );
  const kanjiKeys = Object.keys(singleKanji(0));
  const target = singleKanji(find);
  useEffect(() => {
    if (active) {
      const id = setInterval(() => {
        setFind(Math.floor(Math.random() * kanjiList.length));
      }, 2000);

      return () => clearInterval(id);
    }
  }, [active]);

  const changeKanji = () => {
    let temp = Math.floor(Math.random() * kanjiList.length);
    clickTimeoutRef.current = setTimeout(() => {
      setFind(temp);
    }, 250);
  };
  return (
    <>
      {kanjiKeys}

      <button
        onClick={() => {
          if (find >= 1) setFind(find - 1);
        }}
      >
        -
      </button>
      <button
        onClick={changeKanji}
        onDoubleClick={() => setActive(!active)}
        style={{
          color: "yellow",
          backgroundColor: active ? "green" : "brown",
        }}
      >
        Random
      </button>
      <button
        onClick={() => {
          if (find <= kanjiList.length - 2) setFind(find + 1);
        }}
      >
        +
      </button>
      <p>
        <select onChange={(e) => setPracticeDisplay(e.target.value)}>
          {kanjiKeys.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        :{target[practiceDisplay]}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
          scrollbarColor: "green transparent",
          //scrollbarWidth: "none",
        }}
      >
        {kanjiList.map((v, i) => (
          <label
            className="kanjiPractice"
            style={{
              flex: "0 0 calc((100% - 12px * 4) / 5)",
              whiteSpace: "nowrap",
              backgroundColor: find == v ? "red" : "green",
            }}
          >
            {singleKanji(i).Furigana}
            <p>
              {find}:{v}
            </p>
          </label>
        ))}
      </div>
    </>
  );
};
