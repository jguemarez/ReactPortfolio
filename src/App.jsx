// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header /> 
      <NavBar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
