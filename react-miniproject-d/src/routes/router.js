import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Detailpage from "../pages/DetailPages/DetailPage";
import Characterpage from "../pages/DetailPages/Characterpage";
import Review from "../pages/DetailPages/Reviewpage";
import Footer from "../components/footer";
import ProfilePage from "../Pages Bagas/Profile-page";


const Routers = () => {



  return (
    // switch -> just like switch case where it read routes/ browser url and return it accordingly
    <>
      <Switch>
        {/* exact means the path must be the same as the value  */}
        {/* return this component if the router is root aka / */}
        <Route exact path="/">
<<<<<<< HEAD
        <Homepage/>
      </Route>
      <Route exact path="/DetailPage/:id">
        <Detailpage/>
      </Route>
      <Route exact path ="/DetailPage/Character/:id">
        <Characterpage/>
      </Route>
      <Route exact path ="/DetailPage/Review/:id">
        <Review />
      </Route>

      {/*  * is for all routes that is not registered in here */}
      <Route path="*">
        <div>
          <h1>PAGE NOT FOUND</h1>
        </div>
      </Route>
    </Switch>
    <Footer />
=======
          <Homepage />
        </Route>
        <Route exact path="/DetailPage">
          <Detailpage />
        </Route>
        <Route exact path="/DetailPage/Character/">
          <Characterpage />
        </Route>
        <Route exact path="/DetailPage/Review/">
          <Review />
        </Route>
        <Route exact path="/Pages Bagas/Profile-page">
          <ProfilePage />
        </Route>
        {/*  * is for all routes that is not registered in here */}
        <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
      <Footer />
>>>>>>> 38f68df54c4adca0ed2300892e9b8fdd7b82fb51
    </>
  );
};

export default Routers;