import React from 'react';

const DeleteTask = ({ taskId, onDelete }) => {
    return (
        <button
            type="button"
            className="btn btn-succes"
            onClick={() => onDelete(taskId)}
        >
            Fait
        </button>
    );
};

export default DeleteTask;
