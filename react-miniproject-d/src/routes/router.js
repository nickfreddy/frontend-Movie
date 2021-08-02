import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Detailpage from "../Pages/DetailPages/DetailPage";
import Characterpage from "../Pages/DetailPages/Characterpage";
import Review from "../Pages/DetailPages/Reviewpage";
import Footer from "../components/footer";
import Navbar_notSign from "../components/header/Navbar_notSign";


const Routers = () => {


  
  return (
    // switch -> just like switch case where it read routes/ browser url and return it accordingly
    <>
    <Navbar_notSign/>
    <Switch>
      {/* exact means the path must be the same as the value  */}
        {/* return this component if the router is root aka / */}
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/SignIn">
        <Homepage/>
      </Route>
      <Route exact path="/DetailPage">
        <Detailpage/>
      </Route>
      <Route exact path ="/DetailPage/Character/">
        <Characterpage/>
      </Route>
      <Route exact path ="/DetailPage/Review/">
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
    </>
  );
};

export default Routers;