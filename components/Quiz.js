import { singleKanji } from "./N5Kanji.js";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  console.log(singleKanji());
  return (
    <>
      <p>クイズ</p>

      <div className="kanjiQuiz">
        {kanjiList.length > 5 ? (
          [...kanjiList]
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((kanji) => (
              <label className="quizBox">{singleKanji(kanji).Kanji}</label>
            ))
        ) : (
          <p>Please select 6 Kanji</p>
        )}
      </div>
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        Home
      </button>
    </>
  );
};
