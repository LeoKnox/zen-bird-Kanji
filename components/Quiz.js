import { singleKanji } from "./N5Kanji.js";
import { useState } from "react";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  const [kanjiQuiz, setKanjiQuiz] = useState(
    [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  const [kanjiAnswer, setKanjiAnswer] = useState(Math.floor(Math.random() * 7));
  const [isWrong, setIsWrong] = useState([]);
  const updateKanjiQuiz = (e) => {
    console.log("reds");
    if (e.target.id == kanjiAnswer) {
      setKanjiQuiz([...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6));
      setKanjiAnswer(Math.floor(Math.random() * 6));
    } else {
      setIsWrong([...isWrong, e.target.id]);
    }
  };
  return (
    <>
      <p>クイズ</p>
      {singleKanji(kanjiQuiz[kanjiAnswer]).Kanji} : {kanjiAnswer} : {isWrong}
      <div className="kanjiQuiz">
        {kanjiList.length > 5 ? (
          kanjiQuiz.map((kanji, v) => (
            <label
              id={v}
              onClick={(e) => updateKanjiQuiz(e)}
              className="quizBox"
              style={{
                backgroundColor: isWrong.includes(kanji) ? "red" : "yellow",
              }}
            >
              {singleKanji(kanji).Kanji} + {v}
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
