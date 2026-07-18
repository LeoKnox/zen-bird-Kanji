import { singleKanji } from "./N5Kanji.js";
import { useState } from "react";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  const [kanjiQuiz, setKanjiQuiz] = useState(
    [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  const [kanjiAnswer, setKanjiAnswer] = useState(Math.floor(Math.random() * 7));
  let wrong = [1, 3, 5];
  const updateKanjiQuiz = (e) => {
    if (e.target.id == kanjiAnswer) {
      setKanjiQuiz([...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6));
      setKanjiAnswer(Math.floor(Math.random() * 6));
    } else {
      wrong.push(e.target.id);
    }
  };
  return (
    <>
      <p>クイズ</p>
      {singleKanji(kanjiQuiz[kanjiAnswer]).Kanji} : {kanjiAnswer}
      <div className="kanjiQuiz">
        {kanjiList.length > 5 ? (
          kanjiQuiz.map((kanji, v) => (
            <div
              style={{
                //display: "{wrong.includes(kanji) ? none : none}",
                //backgroundColor: "red",
                padding: "8px",
              }}
            >
              <label
                id={v}
                onClick={(e) => updateKanjiQuiz(e)}
                className="quizBox"
                style={{ border: "4px solid red" }}
              >
                {singleKanji(kanji).Kanji} + {v}
              </label>
            </div>
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
