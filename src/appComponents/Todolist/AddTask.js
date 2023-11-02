import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('');
    const defaultStatus = 'En Attente';

    const handleAdd = () => {
        if (name.trim() !== '') {
            onAdd(name, defaultStatus);
            setName('');
        }
    };

    return (
        <div className="d-flex justify-content-center mb-2 mt-4">
            <input
                placeholder="Ajouter une tâche"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
};

export default AddTask;
