// import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.scss'
import { BrowserRouter } from "react-router-dom";
import Routers from './routes/router';
import Footer from './components/footer';
import Navbar_Admin from './components/header/Navbar_Admin';
import Navbar_notSign from './components/header/Navbar_notSign';
import Navbar_Sign from './components/header/Navbar_Sign';
import Homepage from './pages/Homepage/Homepage';
import AdminPage from './Pages Bagas/Admin-Page';
import FormMovie from './Pages Bagas/Admin-Page/FormUpdate';
import ProfilePage from './Pages Bagas/Profile-page';



function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* the routing components */}
      {/* <Routers />
      </BrowserRouter> */}
      <AdminPage />

    </div>
  );
}

export default App;
