import React from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedimageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);


  const UploadImageHandler = async(file) =>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please solve error first")
      
    }
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        ehanced={enhancedImage}
      />
    </>
  );
};

export default Home;


// Api calling feature has to do min 49.09 ses 