import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import { Task } from './types';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState<string>('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (taskInput.trim()) {
            const newTask: Task = {
                id: Date.now(),
                text: taskInput,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    const editTask = (id: number, newText: string) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    const removeTask = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button onClick={addTask}>Adicionar</button>
            <TaskList
                tasks={tasks}
                editTask={editTask}
                removeTask={removeTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
};

export default App;