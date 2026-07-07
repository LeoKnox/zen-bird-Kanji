export default Quiz = ({ setCurrentPage }) => {
  return (
    <>
      <p>クイズ</p>
      <button className="kanjiButton" onClick={() => setCurrentPage("家")}>
        Home
      </button>
    </>
  );
};
