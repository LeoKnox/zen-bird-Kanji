import { N5Kanji } from "./N5Kanji.js";

export default Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>{N5Kanji[1].Kanji}</h2>
        <table>
          {Object.entries(N5Kanji[1]).map((data, key) => (
            <tbody>
              <tr>
                <td
                  key={data}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {data}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};
