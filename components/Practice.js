import { singleKanji } from "./N5Kanji.js";
import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  return (
    <>
      <button>-</button>
      <label>Target:</label>
      <button>+</button>
      <div>
        {kanjiList.map((v, i) => (
          <p>{() => singlgeKanji(v).Kanji}-</p>
        ))}
      </div>
    </>
  );
};
