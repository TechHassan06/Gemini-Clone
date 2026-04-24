<<<<<<< HEAD
# ♊ Gemini API Clone

A fully responsive, modern web application that perfectly replicates the Google Gemini UI. Built with React and Vite, this clone securely connects to Google's official Generative AI API (`gemini-2.5-flash`) to provide real-time, AI-driven chat capabilities.

## ✨ Features

- **Authentic User Interface:** Pixel-perfect clone of the official Gemini look and feel, featuring a collapsable sidebar, card suggestions, and smooth CSS animations.
- **Generative AI Integration:** Powered by Google's `@google/genai` SDK using the latest `gemini-2.5-flash` model.
- **Persistent Recent Chats:** Just like the real application, your prompt history is automatically tracked and persisted natively in your browser's `localStorage`.
- **Markdown Text Formatting:** Custom regex engine parsing out asterisks into correctly styled bold words and preserved bullet-point paragraph blocks for readable responses.
- **Dynamic Preloaders:** Displays the classic Google shimmering skeleton bars alongside a subtle rotating Gemini icon when the API is actively processing requests.

## 🛠️ Technology Stack

- **Frontend Framework:** React 19 + Vite
- **Styling:** Pure CSS (flexbox layouts, keyframe animations, media queries for responsiveness)
- **State Management:** React Context API natively passing data up and down component trees without prop drilling.
- **API Integration:** `@google/genai` (^1.50)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Application
Clone this repository and move into the working directory.
```bash
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Error-Free Environment Variables
Create a root `.env` file in the project folder and paste your Gemini Developer API Key inside. You can create a free key via [Google AI Studio](https://aistudio.google.com/apikey).
```env
VITE_GEMINI_API_KEY=your_actual_api_key_goes_here
```

### 4. Run the Dev Server
Launch Vite's fast HMR environment to load the app interface.
```bash
npm run dev
```

Navigate to the localhost port provided in the terminal (usually `http://localhost:5173/`).

## ⚙️ Architecture Notes
- Everything is managed under a single global `<ContextProvider>` wrapper keeping UI logic separate from the central SDK data fetching hook.
- Component separation splits into `Main.jsx` and `Sidebar.jsx`.

## 📜 License
This project is open source and available under the [MIT License](LICENSE). 
> **Note:** This represents an educational clone and is not officially associated with Google or Google DeepMind.
=======
# Gemini-Clone
 A modern Google Gemini clone built with React! 🚀 Features the official Gemini API, real-time markdown chat ✍️, persistent local storage 💾, responsive design 📱, and beautiful skeleton loaders ✨.
>>>>>>> 4d5fbbb3bd940a9fdfc66427b6717e290b6f762c
