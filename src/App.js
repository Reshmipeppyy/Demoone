import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/Projectt/Components/TaskForm';
import Filter from './components/Projectt/Components/Filter';
import TaskList from './components/Projectt/Components/TaskList';
import Form from './components/Projectt/Components/Form';
import { fetchTasks, addTask, deleteTask, updateTask, toggleTaskStatus } from './api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        setError('Failed to fetch tasks.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      const addedTask = await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditTask = async (taskId, updatedData) => {
    try {
      const updatedTask = await updateTask(taskId, updatedData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleToggleTaskStatus = async (taskId, currentStatus) => {
    try {
      const toggledTask = await toggleTaskStatus(taskId, currentStatus);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? toggledTask : task))
      );
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const searchedTasks = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Task Manager</h1>
      {loading && <div>Loading tasks...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && (
        <>
          <TaskForm onAddTask={handleAddTask} />
          <Filter
            filter={filter}
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <TaskList
            tasks={searchedTasks}
            onDeleteTask={handleDeleteTask}
            onToggleTaskStatus={handleToggleTaskStatus}
            onEditTask={handleEditTask}
          />
        </>
      )}
    </div>
  );
};

export default App;