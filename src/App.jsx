import './App.css'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {

  return (
      <div className='App'>
        <Navbar />

        <div className='app-container'>
          
          <Sidebar />

          <div className='routes'>
              
              <HomePage />

          </div>

        </div>

        <Footer />
      </div>
  )
}

export default App;