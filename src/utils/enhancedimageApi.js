const API_KEY = "wx8srvyvk3ujdw2xb";
import axios from "axios";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded sucessfully, Task ID:", taskId);

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);
    return enhancedImageData;
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

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found");
  }

  return data.data.task_id;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Procesing....(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. please try again later");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollForEnhancedImage(taskId, retries + 1);
  }
  console.log("Enhance Image URL", result);
  return result;
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

// min 1.41
