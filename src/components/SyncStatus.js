import React, { useState } from 'react';
import axios from 'axios';

const SyncStatus = () => {
    const [syncing, setSyncing] = useState(false);

    const handleSyncEmails = async () => {
        setSyncing(true);
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/sync`, { withCredentials: true });
            alert('Synchronization complete');
        } catch (error) {
            console.error('Error syncing emails:', error);
            alert('Synchronization failed');
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div>
            <h2>Sync Status</h2>
            <button onClick={handleSyncEmails} disabled={syncing}>
                {syncing ? 'Syncing...' : 'Sync Emails'}
            </button>
        </div>
    );
};

export default SyncStatus;
