# 🏎️ F1 Dashboard

A real-time Formula 1 dashboard that provides current race information, driver standings, and constructor championships. Built with React and Express, this application delivers an immersive F1 experience with clean visualizations and up-to-date statistics.

## 🚀 Features

- Driver standings and statistics
- Constructor championship tracking
- Interactive data visualizations

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Material-UI (MUI)
- Chart.js for data visualization
- Axios for API requests
- React Router for navigation

### Backend
- Node.js
- Express
- Axios for external API calls
- CORS for cross-origin support

## 📁 Project Structure
```
f1-dashboard/
├── frontend/ # React frontend application
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ ├── services/ # API service functions
│ │ ├── types/ # TypeScript type definitions
│ │ └── utils/ # Utility functions
│ ├── public/ # Static files
│ └── package.json # Frontend dependencies
│
├── backend/ # Express backend server
│ ├── src/
│ │ ├── controllers/ # Request handlers
│ │ ├── routes/ # API routes
│ │ ├── services/ # Business logic
│ │ └── utils/ # Helper functions
│ └── package.json # Backend dependencies
│
└── README.md # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```
The frontend will run on http://localhost:3000

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```
The backend will run on http://localhost:3001

## 📚 API Documentation
The backend server provides the following endpoints:
- GET /api/latest-race - Get latest race results
- GET /api/driver-standings - Get current driver standings
- GET /api/constructor-standings - Get constructor standings

## 🔮 Future Enhancements
- Real-time Updates
- Live timing data during race weekends
- Push notifications for race events
- Enhanced Visualizations
- Track maps with live position tracking
- Lap time comparison charts
- Historical data analysis
- User Features
  - User authentication
  - Favorite driver tracking
  - Customizable dashboards
  - Race calendar with timezone support
- Performance
- Data caching
- Progressive Web App (PWA) support
- Offline functionality
- Additional Features
  - Team radio highlights
  - Weather integration for race weekends
  - Tire strategy visualization
  - Qualifying session analysis

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
- Fork the repository
- Create your feature branch ( git checkout -b feature/AmazingFeature)
- Commit your changes ( git commit -m 'Add some AmazingFeature')
- Push to the branch ( git push origin feature/AmazingFeature)
- Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- Formula 1 for the inspiration
- Ergast API for race data
- All contributors and supporters