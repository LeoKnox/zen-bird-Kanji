import { singleKanji } from "./N5Kanji.js";

export default Quiz = ({ setCurrentPage, kanjiList }) => {
  let kanjiQuiz = [...kanjiList].sort(() => 0.5 - Math.random()).slice(0, 6);
  console.log(singleKanji());
  const updateKanjiQuiz = () => {
    kanjiQuiz = [1, 1, 1, 1, 1, 1];
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
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        Home
      </button>
    </>
  );
};
