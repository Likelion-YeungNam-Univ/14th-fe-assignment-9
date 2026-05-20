import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { text } from "../traslation_text.js";

const Notification = () => {
  const { lang } = useLanguage();

  return (
    <aside className="w-full p-6 bg-white flex flex-col h-full overflow-y-auto">

      {/* 할 일 */}
      <section>
        <div className="flex justify-between items-center border-b pb-1 mb-4">
          <h2 className="font-bold text-gray-800">
            {text[lang].todo}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="relative group">

            <button className="absolute -right-0 top-0 text-gray-400 hover:bg-slate-200" aria-label="Close">
              ✕
            </button>
            <div className="flex items-start space-x-2">
              <div className="-mt-2 text-gray-400">📢</div>
              <div>
                <p className="ml-2 text-xs text-blue-500">
                  {text[lang].todayClass}
                </p>
                <p className="ml-2 text-[10px] text-gray-400">
                  {text[lang].date} |{" "}
                  <button className="underline cursor-pointer" aria-label="상세 정보">
                    {text[lang].detail}
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>



        <section>
          <button className="w-full text-blue-500 text-xs pt-4 mb-20" aria-label="모두 보기">
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
          <div>
            <LanguageSelector />
          </div>
        </div>
      </section>
    </aside>

  );
};

export default Notification;