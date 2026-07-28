import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  return (
    <>
      <button>-</button>
      <label>Target:</label>
      <button>+</button>
      <div>
        {kanjiList.map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </>
  );
};
