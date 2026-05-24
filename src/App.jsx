import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import LangageContext from './Langage';
import './App.css'

function App() {
  const [langage, setLangage] = useState('한국어');

  return (

    <LangageContext.Provider value={[langage, setLangage]}>
      <div>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    </LangageContext.Provider>
  )
}
export default App
