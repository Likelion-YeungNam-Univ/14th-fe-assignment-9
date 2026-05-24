import Head from "./Head";
import LongForm from "./LongForm";
import ShortForm from "./ShortForm";
import Bar from "./Bar";

const App = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Head />
      <div className="flex">
        <Bar />
      </div>
      <div className="ml-16">ㅁ
        <LongForm />
        <ShortForm />
      </div>
    </div>
  );
};

export default App;