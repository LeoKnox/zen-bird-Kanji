import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";
import SideBar from "./SideBar.js";
import KanjiSelect from "./KanjiSelect.js";

export default Home = () => {
  const [currentPage, setCurrentPage] = useState("kanjiSelect");
  const availablePages = {
    kanjiSelect: (
      <KanjiSelect setCurrentPage={setCurrentPage} N5Kanji={N5Kanji} />
    ),
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>家</h2>
        {availablePages[currentPage]}
      </div>
    </>
  );
};
