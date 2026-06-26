export default KanjiHover = (row) => {
  return (
    <>
      {Object.entries(row).map((data) => (
        <div name="info">
          <label
            key={data}
            style={{
              display: "block",
              padding: "8px",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "1em",
              overflow: "visible",
            }}
          >
            {row >= 0 && <OnHover title={data[0]} data={data[1]} />}
          </label>
        </div>
      ))}
    </>
  );
};
