import { singleKanji } from "./N5Kanji.js";
import { useState, useEffect, useRef } from "react";
import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  const clickTimeoutRef = useRef(null);
  const [active, setActive] = useState(0);
  const [find, setFind] = useState(
    Math.floor(Math.random() * kanjiList.length)
  );
  const [target, setTarget] = useState(singleKanji(find));
  useEffect(() => {
    if (active) {
      const id = setInterval(() => {
        setFind(Math.floor(Math.random() * kanjiList.length));
        setTarget(find);
      }, 2000);

      return () => clearInterval(id);
    }
  }, [active]);

  const changeKanji = () => {
    clickTimeoutRef.current = setTimeout(() => {
      setFind(Math.floor(Math.random() * kanjiList.length));
      setTarget(find);
    }, 250);
  };
  return (
    <>
      <button>-</button>
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
      <button>+</button>
      <p>
        Target:{target.Furigana}:{find}
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
