import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router-dom";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Main from "./components/layout/Main";
import Protected from "./components/provider/Protected";
import "./global.css";
import Billing from "./pages/Billing";
import Brands from "./pages/Brands/Brands";
import Dosages from "./pages/Dosages/Dosages";
import Home from "./pages/Home";
import Pharmaceuticals from "./pages/Pharmaceuticals/Pharmaceuticals";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile";
import Rtl from "./pages/Rtl";
import SignIn from "./pages/SignIn";
import Specifications from "./pages/Specifications/Specifications";
import Tables from "./pages/Tables";
import ActiveIngredients from "./pages/ActiveIngredients/ActiveIngredients";
import Nations from "./pages/Nations/Nations";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Switch>
<<<<<<< HEAD
        {/* <Route path="/sign-up" exact component={SignUp} /> */}
        {/* <Route path="/sign-in" exact component={SignIn} /> */}
=======
        <Route path="/sign-in" exact component={SignIn} />
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
        <Main>
          {/* <Protected> */}
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/dosages" component={Dosages} />
            <Route exact path="/pharmaceuticals" component={Pharmaceuticals} />
            <Route exact path="/specifications" component={Specifications} />
<<<<<<< HEAD
            <Route exact path="/branches" component={Branches} />
=======
            <Route exact path="/brands" component={Brands} />
            <Route exact path="/nation" component={Nations} />
            <Route exact path="/categories" component={Categories} />
            <Route
              exact
              path="/active-ingredient"
              component={ActiveIngredients}
            />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/rtl" component={Rtl} />
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/dashboard" />
          {/* </Protected> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
