import { N5Kanji } from "./N5Kanji.js";
import { useState } from "react";
import SideBar from "./SideBar.js";
import KanjiSelect from "./KanjiSelect.js";
import Quiz from "./Quiz.js";

export default Home = () => {
  const [currentPage, setCurrentPage] = useState("家");
  const availablePages = {
    家: <KanjiSelect setCurrentPage={setCurrentPage} N5Kanji={N5Kanji} />,
    クイズ: <Quiz />,
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>家 {currentPage}</h2>
        {availablePages[currentPage]}
      </div>
    </>
  );
};
