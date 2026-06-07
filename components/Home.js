import { N5Kanji } from "./N5Kanji.js";

export default Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>{N5Kanji[1].Kanji}</h2>
        <table>
          <tbody>
            {N5Kanji.map((row) => 
            <tr>
              {Object.entries(row).map((data) => (
                <td
                  key={data}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  {data[0]}:{data[1]}
                </td>
              ))}
            </tr>
)}
          </tbody>
        </table>
      </div>
    </>
  );
};
