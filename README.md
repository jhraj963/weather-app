🔗 GitHub Repository: https://github.com/jhraj963/weather-app

🌐 Live Demo: https://weather-app-sandy-two-45.vercel.app/

📁 Project Structure
1. public/ – Contains static assets (e.g., index.html, favicon)

2. src/

✅ components/WeatherDisplay.tsx – Component to display weather data

✅ store/index.ts – Configures the Redux store

✅ store/weatherSlice.ts – Handles API data and Redux logic

✅ App.tsx – Main application component

✅ index.tsx – Entry point that renders the app

3. package.json – Defines dependencies and scripts

4. tsconfig.json – TypeScript configuration

5. README.md – Project documentation

⚙️ Setup Instructions
1. Clone the repository:
    git clone https://github.com/jhraj963/weather-app.git
    cd weather-app

2. Install dependencies:
    npm install

3. Set up the OpenWeatherMap API key: Create a .env file in the root folder and add:
    REACT_APP_WEATHER_API_KEY=your_api_key_here

4. Run the development server:
    npm start

🌟 Features
✅ Responsive UI: Built with Bootstrap 5 for mobile & desktop
✅ Search Functionality: Users can search by city name
✅ State Management: Uses Redux Toolkit
✅ TypeScript Support: Entire app written in TypeScript
✅ Loading/Error Handling: Spinner for loading, messages for errors


