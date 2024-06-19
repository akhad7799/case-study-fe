import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAccount from './components/AddAccount';
import EmailList from './components/EmailList';
import SyncStatus from './components/SyncStatus';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <h1>Email Management App</h1>
                <Routes>
                    <Route path="/add-account" element={<AddAccount />} />
                    <Route path="/emails" element={<EmailList />} />
                    <Route path="/sync-status" element={<SyncStatus />} />
                    <Route path="/" element={<AddAccount />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
