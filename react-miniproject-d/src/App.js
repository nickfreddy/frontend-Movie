import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Navbar_Admin from './components/header/Navbar_Admin';
import Navbar_notSign from './components/header/Navbar_notSign';
import Navbar_Sign from './components/header/Navbar_Sign';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar_notSign />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
