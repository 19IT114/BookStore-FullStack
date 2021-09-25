import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookComponents from "./Components/BookComponents";
import FooterComponents from "./Components/FooterComponents";
import HeaderComponent from "./Components/HeaderComponent";
import AddBookComponent from "./Components/AddBookComponent";
import UpdateBookComponent from "./Components/UpdateBookComponent";
import ViewBookComponent from "./Components/ViewBookComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={BookComponents}></Route>
            <Route path="/add-book" component={AddBookComponent}></Route>
            <Route path="/update-book/:id" component={UpdateBookComponent}></Route>
            <Route path="/view-book/:id" component={ViewBookComponent}></Route>
          </Switch>
        </div>
        <FooterComponents />
      </Router>
    </div>
  );
}

export default App;
