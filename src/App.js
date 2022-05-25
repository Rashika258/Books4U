import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter, Link, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ExploreScreen from "./screens/ExploreScreen";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Route path="/">
        <HomeScreen />
      </Route>
      {/* <Link to="/">
        <HomeScreen />
      </Link> */}

      <Link to="/about">
        <AboutScreen />
      </Link>

      <Link to="/about">
        <ContactScreen />
      </Link>

      <Link to="/register">
        <RegisterScreen />
      </Link>

      <Link to="/login">
        <LoginScreen />
      </Link>

      <Link to="/explore">
        <ExploreScreen />
      </Link>

      <Link to="/bookDetail">
        <BookDetail />
      </Link>
</BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
