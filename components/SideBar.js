export default SideBar = ({ kanjiList, setCurrentPage }) => {
  return (
    <>
      <div
        className="sideBar"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          justifyContent: "flex-start",
          backgroundColor: "#506b3c",
          color: "#88a564",
          minWidth: "auto",
          padding: "10px",
          minHeight: "60vh",
        }}
      >
        <p>Kanji</p>
        <label
          name="infoKanji"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            backgroundColor: "#ccff99",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px", // move to css file to clear empty
            borderRadius: "1em",
            alignSelf: "stretch",
            boxSizing: "border-box",
          }}
        >
          {kanjiList}
        </label>
        <div style={{ backgroundColor: "tan", padding: "5px", margin: "-8px" }}>
          <button
            className="kanjiButton"
            onClick={() => setCurrentPage("練習")}
          >
            practice
          </button>
          <button
            className="kanjiButton"
            onClick={() => setCurrentPage("クイズ")}
          >
            quiz
          </button>
        </div>
      </div>
    </>
  );
};
