import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Detailpage from "../pages/DetailPages/DetailPage";
import Characterpage from "../pages/DetailPages/Characterpage";
import Review from "../pages/DetailPages/Reviewpage";
import Footer from "../components/footer";
import Navbar_notSign from "../components/header/Navbar_notSign";
import ProfilePage from "../Pages Bagas/Profile-page";
import AdminPage from "../Pages Bagas/Admin-Page";
import Navbar_Sign from "../components/header/Navbar_Sign";


const Routers = () => {
  const Token = localStorage.getItem('Token');

  return (
    // switch -> just like switch case where it read routes/ browser url and return it accordingly
    <>
      {window.location.pathname === '/Admin-page' || window.location.pathname === '/Profile-page' ? null : Token ? <Navbar_Sign /> : <Navbar_notSign />}
      <Switch>
        {/* exact means the path must be the same as the value  */}
        {/* return this component if the router is root aka / */}
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/DetailPage/:id">
          <Detailpage />
        </Route>
        <Route exact path="/DetailPage/Character/:id">
          <Characterpage />
        </Route>
        <Route exact path="/DetailPage/Review/:id">
          <Review />
        </Route>
        <Route exact path="/Profile-page">
          <ProfilePage />
        </Route>
        <Route exact path="/Admin-page">
          <AdminPage />
        </Route>

        {/*  * is for all routes that is not registered in here */}
        <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
      {window.location.pathname === '/Admin-page' || window.location.pathname === '/Profile-page' ? null : <Footer />}
    </>
  );
};

export default Routers;