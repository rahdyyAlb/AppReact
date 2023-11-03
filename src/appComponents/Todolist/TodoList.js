import React, { useState } from 'react';
import { todolist } from './Data';
import ViewTasks from './ViewTasks';
import AddTask from './AddTask';
import './TodoList.css';
import 'bootstrap/dist/css/bootstrap.css';

let nextId = 12;

const TodoList = () => {
    const [tasks, setTasks] = useState(todolist);
    const [editingTask, setEditingTask] = useState(null);

    const handleDelete = id => {
        const confirmation = window.confirm("Voulez-vous vraiment supprimer cette tâche?");
        if (confirmation) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const handleAdd = (name, status) => {
        setTasks([
            ...tasks,
            { id: nextId++, name: name, status: status }
        ]);
    };

    const handleEdit = (taskId, newName, newStatus) => {
        setTasks(tasks.map(task => (task.id === taskId ? { ...task, name: newName, status: newStatus } : task)));
        setEditingTask(null);
    };

    return (
        <div>
            <h1 className="text-center"> Application ToDo List</h1>

            <div className="ms-3 text-left">
                <p>Dans notre application ToDo List, gérez vos tâches en toute simplicité :</p>
                <p>Ajoutez des tâches en un instant.</p>
                <p>Modifier le status.</p>
                <p>Supprimez celles dont vous n'avez plus besoin.</p>
                <p>Organisez votre journée plus efficacement que jamais !</p>
                <p>Commencez dès maintenant et restez productif ! 🚀</p>
            </div>
            <ViewTasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
            <AddTask onAdd={handleAdd} />

        </div>
    );
};

export default TodoList;
