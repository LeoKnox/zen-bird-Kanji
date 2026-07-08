export default Quiz = ({ setCurrentPage, kanjiList }) => {
  return (
    <>
      <p>クイズ</p>
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        Home
        <p>{kanjiList}</p>
      </button>
    </>
  );
};
