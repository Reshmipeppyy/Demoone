import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (newTask) => {
  const response = await axios.post(API_URL, {
    title: newTask,
    completed: false,
  });
  return response.data;
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`);
};

export const updateTask = async (taskId, newTitle) => {
  const response = await axios.put(`${API_URL}/${taskId}`, {
    title: newTitle,
    completed: false, // You can set other properties here if needed
  });
  return response.data;
};

export const toggleTaskStatus = async (taskId, currentStatus) => {
  const response = await axios.patch(`${API_URL}/${taskId}`, {
    completed: !currentStatus,
  });
  return response.data;
};