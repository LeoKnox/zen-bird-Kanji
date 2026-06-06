import { N5Kanji } from "./N5Kanji.js";

export default Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>{N5Kanji[1].Kanji}</h2>
        <h3>
          {N5Kanji[1].Furigana}
          {N5Kanji[1].Romaji}
          {N5Kanji[1].Meaning}
        </h3>
      </div>
    </>
  );
};
