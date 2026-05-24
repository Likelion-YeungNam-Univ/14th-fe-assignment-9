import React, { useState } from 'react'
import Story from './Story'
import Post from './Post'
import Head from './Head'
import Message from './Message'
import LoginContext from './LoginContext'
import LoginPage from './LoginPage'


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
      {isLogin ? (
        <>
          <Head/>
          <Story/>
          <Post/>
          <Message/>
        </>
      ) : (
        <LoginPage/>
      )}
    </LoginContext.Provider>
  )
}

export default App
