import React from 'react';

const DeleteTask = ({taskId, onDelete}) => {
    const handleDelete = () => {
        const confirmation = window.confirm("Voulez-vous vraiment supprimer cette tâche?");
        if (confirmation) {
            onDelete(taskId);
        }
    };

    return (
        <button
            type="button"
            className="btn btn-success"
            onClick={handleDelete}
        >
            Fait
        </button>
    );
};

export default DeleteTask;
