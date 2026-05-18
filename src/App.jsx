import List from './components/List'         
import Maindash from './components/Maindash'  
import Dashboard from './components/Dashboard' 
import Notification from './components/Notification' 
import Logo from './components/Logo'          

const App = () => {
  return (
    <div className="flex">
      <List />

      <div className="flex-1 flex flex-col min-w-0">
        <Maindash />

        <main className="p-8 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
      <div className="w-80 flex flex-col gap-4 p-4">
          <Logo />
          <Notification />
        </div>
    </div>
        );
}

        export default App;