import Head from "./Head";
import LongForm from "./LongForm";
import ShortForm from "./ShortForm";
import Bar from "./Bar";
import { ThemeProvider } from "./context/Theme";
import { useContext } from "react";
import Theme from "./context/Theme";

const AppContainer = () => {
  const {isDark} = useContext(Theme);
  return (
      <div className={`min-h-screen ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#ffffff]'} transition-colors duration-300`}>
        <Head />
        <div className="flex">
          <Bar />
        </div>
      <div className="ml-16">
        <LongForm />
        <ShortForm />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;