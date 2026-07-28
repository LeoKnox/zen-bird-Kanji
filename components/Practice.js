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
      <div>
        {kanjiList.map((v, i) => (
          <p>{singleKanji(i).Furigana}</p>
        ))}
      </div>
    </>
  );
};
