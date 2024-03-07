# FriendZone Frontend

FriendZone Frontend is the client-side component of the FriendZone application, providing a user interface for interacting with the backend API. This React application allows users to register, log in, create posts, and perform various user-related actions.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Security](#security)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [License](#license)

## Project Structure
The frontend project follows a typical React application structure:

- **public**: Static assets and HTML template.
- **src**: Main source code directory.
  - **assets**: Images, styles, and other assets.
  - **components**: React components organized by functionality.
  - **context**: React context providers and consumers.
  - **hooks**: Custom React hooks for state and functionality.
  - **pages**: Individual pages or views.
  - **services**: API service functions.
  - **utils**: Utility functions.
  - **App.js**: Main application component.
  - **index.js**: Entry point to render the React application.
- **package.json**: Project configuration and dependencies.

## Installation
1. Clone the repository: `git clone https://github.com/Salman-at-github/friendzone-frontend`
2. Navigate to the project directory: `cd friendzone-frontend`
3. Install dependencies: `npm install`

## Usage
1. Set up your backend API host by configuring the `.env` file. Example: `REACT_APP_BACKEND_HOST=http://127.0.0.1:3030`
2. Start the development server: `npm start`

## Features
- **User Authentication**: Register and log in securely using the backend API.
- **Post Creation**: Create new posts with titles and descriptions.
- **Google Authentication**: Optionally, log in using Google accounts.
- **Error Handling**: User-friendly error messages for better user experience.
- **Responsive Design**: Mobile-friendly interface for various devices.

## Security
- **Secure API Communication**: Communicates securely with the backend API using HTTPS.
- **User Authentication**: Utilizes secure token-based authentication for user sessions.
- **Input Validation**: Applies proper validation to user inputs to prevent security vulnerabilities.

## Dependencies
- React: JavaScript library for building user interfaces.
- React Router: Library for navigation in a React application.
- Axios: HTTP client for making API requests.
- React Icons: Icon library for React components.

## Environment Variables
- `REACT_APP_BACKEND_HOST`: Backend API host (e.g., `http://127.0.0.1:3030`).

## License
This project is licensed under the [MIT License](LICENSE). No, it's actually free.