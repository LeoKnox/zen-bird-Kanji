import ReturnHome from "./ReturnHome.js";

export default Practice = ({ kanjiList }) => {
  return (
    <>
      {kanjiList.map((i) => (
        <p>{i}</p>
      ))}
    </>
  );
};
