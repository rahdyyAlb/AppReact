import React, {useState} from 'react';
import Status from './Status';

const EditTask = ({taskId, initialName, initialStatus, onSave}) => {
    const [name, setName] = useState(initialName);
    const [status, setStatus] = useState(initialStatus);

    const handleSave = () => {
        onSave(taskId, name, status);
    };

    return (
        <div className="d-flex flex-column">
            <input
                type="text"
                placeholder="Nom de la tâche"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="En Cours">En Cours</option>
                <option value="Fini">Fini</option>
                <option value="En Attente">En Attente</option>
            </select>
            <button className="btn btn-primary mt-2" onClick={handleSave}>
                Enregistrer
            </button>
            <Status status={status}/>
        </div>
    );
};

export default EditTask;
