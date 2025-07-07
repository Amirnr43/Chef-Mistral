# 🍽️ Chef‑Mistral

A modern recipe app built with **React** and **Vite**, featuring intuitive UI, dynamic styling, and smooth user interactions.

---

## ⚡ Live Demo

Try it now: *[Link to your live site]*

---

## 🧭 Overview

Chef‑Mistral lets food lovers browse and explore recipes with ease. Powered by React for slick user experiences and Vite for lightning-fast loads.

---

## 🌟 Key Features

- 🔍 **Recipe Search** – filter recipes by ingredients or categories  
- 📄 **Recipe Detail View** – step-by-step instructions with images  
- ✅ **Favorites** – save your top picks using local storage  
- 🎨 **Responsive Design** – mobile-first layout for carefree browsing  
- ⚡ **Instant Refresh with Vite** during development  

---

## 🧱 Tech Stack

| Technology        | Purpose                         |
|-------------------|---------------------------------|
| **React**         | UI components & state handling |
| **Vite**          | Lightweight development server |
| **CSS Modules**   | Compact, scoped styling         |
| **localStorage**  | Persistent favorites           |

---

## 🚀 Getting Started

### Requirements

- Node.js (v14+)  
- npm (v6+) or yarn  

### Setup

```bash
git clone https://github.com/Amirnr43/Chef-Mistral.git
cd Chef-Mistral

npm install
npm run dev

How to Set Up Your OpenRouter API Key
1- Get your OpenRouter API key:

Go to https://openrouter.ai and sign up for a free account.

Navigate to your dashboard and generate a new API key.

2- Create a .env.local file in the project root:

In the root folder of this project, create a file named .env.local

Add the following line, replacing your_api_key_here with your actual API key:
VITE_OPENROUTER_API_KEY=your_api_key_here
3- Important:

Do NOT commit your .env.local file to GitHub or share it publicly.

This file is included in .gitignore to keep your key private.

4- Run the app:

Start the project as usual (e.g., npm run dev or npm start).

The app will use the API key from your .env.local file to connect to OpenRouter.





If you are using Create React App (CRA) instead of Vite, create .env.local with:
REACT_APP_OPENROUTER_API_KEY=your_api_key_here
and the code accesses it via:
process.env.REACT_APP_OPENROUTER_API_KEY
