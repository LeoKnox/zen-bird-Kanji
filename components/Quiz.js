export default Quiz = ({ setCurrentPage, kanjiList }) => {
  return (
    <>
      <p>クイズ</p>
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        Home
        <div className="kanjiQuiz">
          {kanjiList.map((kanji) => (
            <label>+{kanji}</label>
          ))}
        </div>
      </button>
    </>
  );
};
