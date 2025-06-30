import React from 'react';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onRemove }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.title}</span>
            <button onClick={() => onRemove(task.id)}>Remove</button>
        </div>
    );
};

export default TaskItem;