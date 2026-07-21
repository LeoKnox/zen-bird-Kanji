import { singleKanji } from "./N5Kanji.js";
import { useState } from "react";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  const [kanjiQuiz, setKanjiQuiz] = useState(
    [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  const [kanjiAnswer, setKanjiAnswer] = useState(Math.floor(Math.random() * 6));
  const [isWrong, setIsWrong] = useState([]);
  const [disableButton, setDisableButton] = useState("true");
  const updateKanjiQuiz = (e, v) => {
    console.log("redss");
    if (e.target.id == kanjiAnswer) {
      const element = document.getElementById(v);
      element.style.backgroundColor = "lightgreen";
      setTimeout(() => {
        setKanjiQuiz(
          [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6)
        );
        setKanjiAnswer(Math.floor(Math.random() * 6));
        setIsWrong([]);
        element.style.backgroundColor = "yellow";
      }, 1000);
    } else {
      setIsWrong((prev) => [...isWrong, +e.target.id]);
    }
  };
  return (
    <>
      <h3>{singleKanji(kanjiQuiz[kanjiAnswer]).Meaning}</h3>
      <div className="kanjiQuiz">
        {kanjiList.length >= 5 ? (
          kanjiQuiz.map((kanji, v) => (
            <label
              id={v}
              onClick={(e) => updateKanjiQuiz(e, v)}
              className="quizBox"
              style={{
                fontSize: "1.7em",
                backgroundColor: isWrong.includes(v) ? "red" : "yellow",
                disabled: "true",
              }}
            >
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
