# Chatbot Using OpenAI API

<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT Logo" width="200" />

A simple chatbot application built using OpenAI's API for generating intelligent and human-like responses. This project includes a Node.js backend and a React-based frontend, offering a seamless user experience for interacting with an AI-powered chatbot.

---

## Features
- Conversational AI powered by OpenAI's GPT models.
- React-based responsive and interactive frontend.
- Node.js backend with Express to handle API requests.
- Scalable and easy-to-extend codebase.

---

## Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)
- OpenAI API Key ([Sign up here](https://openai.com/api/))

---

## Getting Started

### 1. Clone the Repository
```bash
# Clone the repository
$ git clone https://github.com/Tushnik1/Chat_Bot.git

# Navigate to the project directory
$ cd chatbot-using-openai
```

### 2. Setup Backend
```bash
# Navigate to the backend folder
$ cd backend

# Install dependencies
$ npm install

# Set your OpenAI API key in the environment
$ export OPENAI_API_KEY=your_api_key_here

# Start the backend server
$ npm start
```

### 3. Setup Frontend
```bash
# Navigate to the frontend folder
$ cd ../frontend

# Install dependencies
$ npm install

# Start the frontend server
$ npm start
```

The frontend will start on [http://localhost:3000](http://localhost:3000), and the backend will run on [http://localhost:3001](http://localhost:3001).

---

## Project Structure
```
chatbot-using-openai/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Chatbox.js
│   │   └── App.css
│   ├── public/
│   └── package.json
└── README.md
```

---
