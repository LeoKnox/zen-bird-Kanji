export default SideBar = ({ kanjiList, setCurrentPage }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          gap: "12px",
          alignItems: "flex-start",
        }}
      >
        <button className="kanjiButton" onClick={() => setCurrentPage("練習")}>
          practice
        </button>
        <button
          className="kanjiButton"
          onClick={() => setCurrentPage("クイズ")}
        >
          quiz
        </button>
      </div>
      <div
        className="sideBar"
        style={{
          display: "grid",
          alignContent: "start",
          flex: "0 0 0 1",
          backgroundColor: "#506b3c",
          color: "#88a564",
          minWidth: "auto",
          padding: "10px",
          minHeight: "60vh",
          position: "relative",
        }}
      >
        <p>Kanji</p>
        <label
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            backgroundColor: "#ccff99",
            padding: "5px", // move to css file to clear empty
            borderRadius: "1em",
          }}
        >
          {kanjiList}
        </label>
      </div>
    </>
  );
};
