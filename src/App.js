
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetailsPage from './components/useEffect/MovieDetailsPage';
import MovieTicketForm from './components/useEffect/MovieTicketForm';

function App() {
  return (
    <>
    <Router basename="/movieshows-api-based">
        <Routes>
          <Route exact path="/movieshows-api-based" element={<MovieDetailsPage />} />
          <Route path="/ticket-form" element={<MovieTicketForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
