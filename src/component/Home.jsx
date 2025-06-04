import React from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);


  const UploadImageHandler = (file) =>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    }

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
