export default SideBar = ({ kanjiList, setCurrentPage }) => {
  return (
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
      <div style={{ position: "absolute", bottom: 0, left: 0, with: "100%" }}>
        <button
          className="kanjiButton"
          onClick={() => setCurrentPage("practice")}
        >
          practice
        </button>
        <button className="kanjiButton" onClick={() => setCurrentPage("quiz")}>
          quiz
        </button>
      </div>
    </div>
  );
};
