import React from 'react';

const Status = ({ status }) => {
    let statusClass = '';

    switch (status) {
        case 'Fini':
            statusClass = 'font-weight-bold bg-success text-white';
            break;
        case 'En Attente':
            statusClass = 'font-weight-bold bg-secondary text-white';
            break;
        default:
            statusClass = 'font-weight-bold bg-warning text-white';
    }

    return <td className={statusClass}>{status}</td>;
};

export default Status;
