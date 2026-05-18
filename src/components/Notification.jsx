import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { text } from "../traslation_text.js";

const Notification = () => {
  const { lang } = useLanguage();

  return (
    <aside className="w-70 p-6 bg-white flex flex-col h-full overflow-y-auto">

      {/* 할 일 */}
      <section>
        <div className="flex justify-between items-center border-b pb-1 mb-4">
          <h2 className="font-bold text-gray-800">
            {text[lang].todo}
          </h2>
        </div>

        <p className="text-xs text-blue-500">
          {text[lang].todayClass}
        </p>

        <p className="text-[10px] text-gray-400">
          5월 8일 19:00 |{" "}
          <span className="underline cursor-pointer">
            {text[lang].detail}
          </span>
        </p>
<section>
        <button className="w-full text-blue-500 text-xs pt-4 mb-20">
          {text[lang].showAll}
        </button>
      </section>

        <h2 className="font-bold text-gray-800 border-b pb-1 mb-4">
          {text[lang].recentFeedback}
        </h2>

        <div className="flex items-start space-x-2 p-2 rounded">
          <span className="text-green-500 text-xs">✓</span>

          <div>
            <h4 className="text-sm font-bold text-blue-500">
              {text[lang].quiz}
            </h4>

            <p className="text-[10px] mt-1 text-gray-400">
              {text[lang].quizDesc}
            </p>

            <p className="text-xs mt-3 mb-10 text-gray-400">
              28 / 30
            </p>
          </div>
        </div>

      <div className="mt-auto pt-4 border-t">
  <div className="rounded-xl shadow-sm">
    <LanguageSelector />
  </div>
</div>
</section>
    </aside>
    
  );
};

export default Notification;