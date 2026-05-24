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
    <ThemeProvider>
      <div className={`bg-[#0f0f0f] min-h-screen ${isDark ? 'dark' : ''}`}>
        <Head />
        <div className="flex">
          <Bar />
        </div>
      <div className="ml-16">
        <LongForm />
        <ShortForm />
      </div>
    </div>
    </ThemeProvider>
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