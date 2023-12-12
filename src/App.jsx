import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import TaskDetailPage from './pages/TaskDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
      <div className='App'>
        <Navbar />

        <div className='app-container'>
          
          <Sidebar />

          <div className='routes'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/about" element={<AboutPage />} />

            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>

          </div>

        </div>

        <Footer />
      </div>
  )
}

export default App;