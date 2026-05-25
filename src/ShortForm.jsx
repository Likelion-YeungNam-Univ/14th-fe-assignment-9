import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function ShortForm() {
  const { language } = useContext(LanguageContext);

  const list = [
    {
      id: 1,
      title: language === "EN" ? "Workout" : "운동"
    },
    {
      id: 2,
      title: language === "EN" ? "Mukbang" : "먹방"
    }
  ];

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {list.map((v) => (
        <div key={v.id} className="min-w-45">
          <div className="h-63 bg-gray-300 rounded-xl" />
          <p>{v.title}</p>
        </div>
      ))}
    </div>
  );
}