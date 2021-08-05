// import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.scss'
import { BrowserRouter } from "react-router-dom";
import Routers from './routes/router';
import AdminPage from './Pages Bagas/Admin-Page';
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
