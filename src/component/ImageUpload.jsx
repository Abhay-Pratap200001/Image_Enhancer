import React from "react";

function ImageUpload() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl:">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center
         hover:border-blue-500 transition-all">

        <input type="file" id="fileInput" className="hidden"/>
        <span className="text-lg font-medium text-gray-700">Click And Drag To Your Image</span>
      </label>
    </div>
  );
}

export default ImageUpload;
