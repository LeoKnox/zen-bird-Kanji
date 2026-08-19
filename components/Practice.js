import { singleKanji } from "./N5Kanji.js";
import { useState, useEffect, useRef } from "react";
import ReturnHome from "./ReturnHome.js";
import DrawingPractice from "./DrawingPractice.js";

export default Practice = ({ kanjiList }) => {
  const clickTimeoutRef = useRef(null);
  const [paths, setPaths] = useState([]);
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

  const changeKanji = (offset = "random") => {
    if (offset == "random") {
      let temp = Math.floor(Math.random() * kanjiList.length);
      clickTimeoutRef.current = setTimeout(() => {
        setFind(temp);
      }, 250);
      setPaths([]);
    } else {
      if (find <= kanjiList.length - 2 || find >= 1) {
        setFind(find + offset);
        setPaths([]);
      } else if (find <= kanjiList.length - 2) {
        setFind(0);
        setPaths([]);
      }
    }
  };
  return (
    <>
      <button
        onClick={() => {
          changeKanji(-1);
        }}
      >
        -
      </button>
      <button
        onClick={() => changeKanji("random")}
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
          changeKanji(1);
        }}
      >
        +
      </button>
      <div className="selectTarget">
        <select
          className="practiceSelect"
          onChange={(e) => setPracticeDisplay(e.target.value)}
        >
          {kanjiKeys.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        <p>
          {target[practiceDisplay]}:{target.Kanji.length}
        </p>
        <DrawingPractice
          changeKanji={changeKanji}
          paths={paths}
          setPaths={setPaths}
        />
      </div>
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
