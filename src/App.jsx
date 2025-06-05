import { useState } from "react";
import Home from "./component/Home";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className=" flex flex-col items-center justify-center min-h-screen
     bg-gray-100 py-8 px-4"
      >
        <div className="text-center mb-8">
          <h1 className=" text-5xl font-bold text-gray-800">AI Image Enhancer</h1>
          <p className="text-lg text-gray-500"> Upload your Image and let AI enhance to in seconds!</p>
        </div>

        <Home />

        <div className="text-sm text-gray-500 mt-6">
           Power By @SheryansAI
        </div>
      </div>
    </>
  );
}

export default App;
