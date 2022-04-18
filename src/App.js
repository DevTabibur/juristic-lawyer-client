import "./App.css";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import {
  Route,
  Router,
  Routes,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Blog from "./Pages/Blog/Blog";
import Checkout from "./Pages/Checkout/Checkout";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
