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
