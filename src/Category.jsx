import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Category() {
  const { language } = useContext(LanguageContext);

  const categoryList =
    language === "EN"
      ? ["All", "Music", "Mix", "News", "ASMR", "Live"]
      : ["전체", "음악", "믹스", "뉴스", "ASMR", "라이브"];

  return (
    <div className="flex gap-2 justify-center flex-wrap p-3">
      {categoryList.map((c, i) => (
        <div key={i} className="px-4 py-2 bg-gray-200 rounded-full text-sm">
          {c}
        </div>
      ))}
    </div>
  );
}