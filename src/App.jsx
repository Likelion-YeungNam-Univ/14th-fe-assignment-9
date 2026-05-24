import React from 'react';
import Sidebar from './Sidebar';
import Story from './Story';
import Peed from './Peed';
import RightBar from './RightBar'; 

function App() {
  return (
    <div className="flex bg-white min-h-screen justify-center">
      <Sidebar />
  
      <main className="flex ml-[70px] pt-4">
 
        <div className="flex flex-col items-center">
          <Story />
          <Peed />
        </div>

        <RightBar />

      </main>
    </div>
  );
}

export default App;