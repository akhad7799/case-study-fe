import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/emails`, { withCredentials: true });
                setEmails(response.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div>
            <h2>Email List</h2>
            <ul>
                {emails.map((email) => (
                    <li key={email.id}>
                        <strong>{email.subject}</strong> - {email.from.emailAddress.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
