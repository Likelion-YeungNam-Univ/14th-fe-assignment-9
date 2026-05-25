import { useState, useContext } from "react";
import { FaYoutube, FaSearch, FaMicrophone } from "react-icons/fa";
import { LanguageContext } from "./context/LanguageContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="flex justify-between items-center px-4 py-3 shadow">

      <div className="flex items-center gap-2">
        <FaYoutube className="text-red-500 text-2xl" />
        <span className="font-bold">
          {language === "EN" ? "YouTube" : "유튜브"}
        </span>
      </div>

      <div className="flex w-1/2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border px-3 py-2 rounded-l-full"
          placeholder={language === "EN" ? "Search" : "검색"}
        />
        <button className="px-4 border bg-gray-100 rounded-r-full">
          <FaSearch />
        </button>
        <button className="ml-2 p-2 bg-gray-200 rounded-full">
          <FaMicrophone />
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 border rounded"
        >
          {language}
        </button>

        <img
          src="https://via.placeholder.com/30"
          className="rounded-full"
        />
      </div>

    </div>
  );
}