# Dashboard Application

This project is a dashboard application that displays various charts using data fetched from a backend API.

## Setup and Running the Application

1. Clone the repository
2. Install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser

Note: Ensure the backend server is running on `http://localhost:8000`.

## For more details you need to manually enter the path in the browser
If you're looking for specific data or endpoints, you might need to access them using the correct path. For example:
'http://127.0.0.1:8000/api/candlestick-data/'
'http://127.0.0.1:8000/api/line-chart-data/'
'http://127.0.0.1:8000/api/bar-chart-data/'
'http://127.0.0.1:8000/api/pie-chart-data/'

## Libraries and Tools Used

- Next.js: React framework for building the frontend
- React: JavaScript library for building user interfaces
- Recharts: Charting library for React
- Tailwind CSS: Utility-first CSS framework for styling

## Approach and Thought Process

1. Created a single dashboard page to display multiple charts
2. Used React hooks (useState, useEffect) for state management and side effects
3. Implemented concurrent data fetching for improved performance
4. Utilized Recharts for creating responsive and interactive charts
5. Employed Tailwind CSS for rapid UI development and responsive design
6. Implemented error handling to provide feedback on data fetching issues
7. Structured the application with reusable chart components for maintainability"# BlockHouse_assignment" 
