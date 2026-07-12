import { singleKanji } from "./N5Kanji.js";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  console.log(singleKanji());
  return (
    <>
      <p>クイズ</p>
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        <div className="kanjiQuiz">
          {kanjiList.map((kanji) => (
            <label className="quizBox">+{kanji}</label>
          ))}
        </div>
      </button>
      <p>+{singleKanji(1)}</p>
    </>
  );
};
