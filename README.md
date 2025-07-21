# Quora Clone 📝

Quora is a popular Q&A platform where people ask questions, share answers, and engage in discussions on a wide range of topics. It connects users around the world to share knowledge, personal experiences, and expert insights in a community-driven format. Inspired by this concept, I have developed a Quora clone that replicates core functionalities such as user authentication, question posting, answering, and topic-based discussions. The project reflects the foundational features and user experience of the original platform.


## Features

- User registration and login with Firebase Authentication
- Feed displaying a list of questions and community discussions
- Ask questions and submit answers in real-time
- Search functionality to find relevant topics and content

## Tech Stack

- ReactJS
- TypeScript 
- Tailwind CSS
- Firebase

## Setup Instructions

Follow the steps below to run this project locally:

**1. Clone the Repository**

- git clone https://github.com/your-username/Quora-Clone.git
- cd quora-clone

**2. Install Dependencies**

- npm install

**3. Configure Firebase**

- Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
- Enable Authentication and Firestore Database
- Replace Firebase config in the project with your own credentials in src/firebase/setup.tsx

**4. Start the Development Server**

- npm run dev
