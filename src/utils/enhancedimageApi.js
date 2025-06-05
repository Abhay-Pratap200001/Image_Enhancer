const API_KEY = "wxcq485axmj2tc5eg";
import axios from 'axios'; 
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {

try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded sucessfully, Task ID:", taskId);

    const enhancedImageData = await fetchEnhancedImage(taskId)
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
    
   const {data} = await axios.post
   (`${BASE_URL}/api/tasks/visual/scale`,
     formData,
      {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    console.log(data);
    
    // return taskId;
}


const fetchEnhancedImage = async (taskid) => {
    // /api/tasks/visual/scale/{taskid}
}


// {status: 200, message: 'success', data: {…}}
// data
// : 
// {task_id: '43cc1822-eb45-4f89-bb51-37b45cd48153'}
// message
// : 
// "success"
// status
// : 
// 200
// [[Prototype]]
// : 
// Object