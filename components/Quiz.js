import { singleKanji } from "./N5Kanji.js";
import { useState } from "react";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  const [kanjiQuiz, setKanjiQuiz] = useState(
    [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  console.log(singleKanji());
  const updateKanjiQuiz = () => {
    setKanjiQuiz([...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6));
  };
  return (
    <>
      <p>クイズ</p>

      <div className="kanjiQuiz">
        {kanjiList.length > 5 ? (
          kanjiQuiz.map((kanji) => (
            <label onClick={() => updateKanjiQuiz()} className="quizBox">
              {singleKanji(kanji).Kanji}
            </label>
          ))
        ) : (
          <p>Please select 6 Kanji</p>
        )}
      </div>
      <button className="kanjiButton" onClick={() => setCurrentPage(["家"])}>
        Home
      </button>
    </>
  );
};
