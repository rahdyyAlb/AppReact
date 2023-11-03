import React, {useState} from 'react';
import EditTask from './EditTask';
import Status from './Status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
const ViewTasks = ({tasks, onDelete, onEdit}) => {
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (taskId, newName, newStatus) => {
        onEdit(taskId, newName, newStatus);
        setEditingTask(null);
    };


    return (
        <div className="d-flex justify-content-center mt-4">
            <table
                className="table table-striped table-bordered rounded-3 border-dark table-hover table-sm align-middle w-50">
                <thead className='text-center'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <th scope="row">{task.id}</th>
                        <td>
                            {editingTask === task.id ? (
                                <EditTask
                                    taskId={task.id}
                                    initialName={task.name}
                                    onSave={handleEdit}
                                />
                            ) : (
                                task.name
                            )}
                        </td>
                        <Status status={task.status}/>
                        <td className="d-flex justify-content-around">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => onDelete(task.id)}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setEditingTask(task.id)}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTasks;
