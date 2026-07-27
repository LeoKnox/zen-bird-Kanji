import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";
import SideBar from "./SideBar.js";
import KanjiSelect from "./KanjiSelect.js";
import Practice from "./Practice.js";
import Quiz from "./Quiz.js";

export default Home = () => {
  const [currentPage, setCurrentPage] = useState("家");
  const [kanjiList, setKanjiList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const availablePages = {
    家: (
      <KanjiSelect
        setCurrentPage={setCurrentPage}
        N5Kanji={N5Kanji}
        setKanjiList={setKanjiList}
        kanjiList={kanjiList}
      />
    ),
    練習: (
      <>
        <Practice setCurrentPage={setCurrentPage} kanjiList={kanjiList} />
        <ReturnHome />
      </>
    ),
    クイズ: (
      <>
        <Quiz setCurrentPage={setCurrentPage} kanjiList={kanjiList} />
        <ReturnHome />
      </>
    ),
  };
  return (
    <>
      <div>
        <h2>{currentPage}</h2>
        {availablePages[currentPage]}
      </div>
    </>
  );
};
