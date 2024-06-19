# Email Synchronization Frontend

This frontend application is used to interact with the Email Synchronization Backend. It allows users to authenticate with Outlook, synchronize emails, and view the synchronization progress in real-time.

## Features

- OAuth2 authentication with Outlook.
- Initiate email synchronization.
- View synchronization progress in real-time.

## Prerequisites

- Node.js
- npm
- Email Synchronization Backend

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies:**

    ```bash
   npm install

3. **Set up environment variables:**

    _Create a .env file in the root directory and add the following variables:_

    ```bash
   REACT_APP_API_BASE_URL=http://localhost:3000/api
   PORT=5000

4. **Running the Application**

   _Start the frontend application:_

   ```bash
   npm start

5. **The application will be running on the configured port (default is 5000).***

## Building for Production

**Build the application:**

   ```bash
   npm run build
   ```

**The production-ready build files will be in the build directory.**

## Application Structure
_The application consists of several components and uses React Router for navigation._

**Components**

* **AddAccount**: Allows users to add an Outlook account.
* **EmailList**: Displays the list of synchronized emails.
* **SyncStatus**: Shows the synchronization status and allows users to initiate synchronization.
* **NavBar**: Navigation bar for switching between components.

## Example Usage

**Authenticate with Outlook:**

1. Open your browser and navigate to http://localhost:5000.
2. Click the "Add Account" button to authenticate with Outlook.

**Synchronize Emails:**

1. Navigate to the "Sync Status" page.
2. Click the "Sync Emails" button to initiate email synchronization.