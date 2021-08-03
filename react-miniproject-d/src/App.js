// import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.scss'
import { BrowserRouter } from "react-router-dom";
import Routers from './routes/router';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
              {/* the routing components */}
        <Routers />
      </BrowserRouter>


    </div>
  );
}

export default App;
