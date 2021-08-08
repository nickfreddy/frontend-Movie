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
import ReviewPage from "../Pages Bagas/Review-page";
import FormMovie from "../Pages Bagas/Admin-Page/FormUpdate";
import { useParams } from 'react-router';
import Photo from "../pages/DetailPages/Photo";


const Routers = () => {
  const { id } = useParams()
  const role = localStorage.getItem('role')
  const Token = localStorage.getItem('Token');
  const hideHeaderFooter = window.location.pathname.includes("/Admin-page") || window.location.pathname.includes("/Profile-page") || window.location.pathname === '/Review-page' || window.location.pathname.includes("/Update-movie") || window.location.pathname.includes("/Review-page");




  return (
    // switch -> just like switch case where it read routes/ browser url and return it accordingly
    <>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      {hideHeaderFooter ? null : Token ? <Navbar_Sign /> : <Navbar_notSign />}
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
        <Route exact path="/Profile-page/:USERID">
          <ProfilePage />
        </Route>
        <Route exact path="/Admin-page/:USERID">
          <AdminPage />
        </Route>
        <Route exact path="/Review-page/:USERID">
          <ReviewPage />
        </Route>
        <Route exact path="/Update-movie/:id">
          <FormMovie />
        </Route>
        <Route exact path="/Photo/:USERID">
          <Photo />
        </Route>

        {/*  * is for all routes that is not registered in here */}
        <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
      {hideHeaderFooter ? null : <Footer />}
    </>
  );
};

export default Routers;