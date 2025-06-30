import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, onTaskRemove }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onComplete={onTaskComplete} 
          onRemove={onTaskRemove} 
        />
      ))}
    </ul>
  );
};

export default TaskList;