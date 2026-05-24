import React from "react";
import LoginContext from "./LoginContext";
import image from './image_2.png'

const LoginPage = () => {
    const { isLogin, setIsLogin } = React.useContext(LoginContext);

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white w-[450px] h-[600px] rounded-3xl shadow-lg p-10 flex flex-col">
            <h1 className="text-5xl font-bold text-center mb-12">Instagram</h1>
            
            <img src={image}
            alt="profile"
            className="w-[150px] h-[150px] rounded-full mx-auto mb-3"
            />

            <p className="text-center font-semibold mb-6">
            @username
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 rounded-3xl text-white py-2"
            onClick={() => setIsLogin(true)}>
            로그인
            </button>

            <button className="mt-auto border border-blue-500 rounded-3xl py-2 text-blue-500">새 계정 만들기</button>
        </div>
    </div>
  );
};

export default LoginPage;