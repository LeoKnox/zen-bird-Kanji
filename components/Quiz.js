export default Quiz = ({ setCurrentPage }) => {
  return (
    <>
      <p>クイズ</p>
      <button onClick={() => setCurrentPage("家")}>Home</button>
    </>
  );
};
