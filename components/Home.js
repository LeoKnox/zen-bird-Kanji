import { N5Kanji } from "./N5Kanji.js";

export default Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>{N5Kanji[1].Kanji}</h2>
        <table>
            <tr>
          <h3>{N5Kanji[1].Furigana}</h3>
          <h3>{N5Kanji[1].Romaji}</h3>
          {N5Kanji[1].Meaning}
          </tr>
        </table>
      </div>
    </>
  );
};
