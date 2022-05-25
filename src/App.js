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
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomeScreen />}  /> */}
          <Route index element={<HomeScreen />} />

          <Route path="/about" element={<AboutScreen />} />

          <Route path="/contact" element={<ContactScreen />} />

          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/login" element={<LoginScreen />} />

          <Route path="/explore" element={<ExploreScreen />} />

          <Route path="/bookDetail" element={<BookDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
