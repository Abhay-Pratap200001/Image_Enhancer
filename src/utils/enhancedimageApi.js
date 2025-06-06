const API_KEY = "wxcq485axmj2tc5eg";
import axios from "axios";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded sucessfully, Task ID:", taskId);

    const enhancedImageData = await fetchEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);
    console.log(enhancedImageData);
    // return enhancedImageData;

  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_Id) {
    throw new Error("Failed to upload image! Task ID not found");
  }

  return data.data.task_Id;
};

const fetchEnhancedImage = async (taskId) => {
     const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
            "X-API-KEY": API_KEY,
      },
    }
  );

  
  if (!data?.data) {
    throw new Error("Failed to upload image! image data not found");
  }
return data.data;

};


// {task_id: '6ac4091d-549d-4ff2-8a34-121b7807af91'