import { singleKanji } from "./N5Kanji.js";
import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  return (
    <>
      <button>-</button>
      <button>Random</button>
      <button>+</button>
      <p>Target:</p>
      <div>
        {kanjiList.map((v, i) => (
          <p>{singleKanji(i).Furigana}</p>
        ))}
      </div>
    </>
  );
};
