import React from 'react';
import axios from 'axios';

const AddAccount = () => {
    const handleAddAccount = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/outlook`, { withCredentials: true });
            window.location.href = response.request.responseURL;
        } catch (error) {
            console.error('Error adding account:', error);
        }
    };

    return (
        <div>
            <h2>Add Outlook Account</h2>
            <button onClick={handleAddAccount}>Add Account</button>
        </div>
    );
};

export default AddAccount;
