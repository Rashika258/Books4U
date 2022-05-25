import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import {
  HashRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ExploreScreen from "./screens/ExploreScreen";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Header />

          <Route path="/" element={HomeScreen} exact />

          <Route to="/about" element={AboutScreen} />

          <Route to="/contact" element={ContactScreen} />

          <Route to="/register" element={RegisterScreen} />

          <Route to="/login" element={LoginScreen} />

          <Route to="/explore" element={ExploreScreen} />

          <Route to="/bookDetail" element={BookDetail} />

          <Footer />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
