import { singleKanji } from "./N5Kanji.js";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
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
      {() => singleKanji()}
    </>
  );
};
