import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from './homePage';
import { AboutPage } from "./AboutPage";
import { LoginPage } from './LoginPage';
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <hr />
        <Navbar/>
        <Routes>
            <Route path="/" element = { <HomePage/> } />
            <Route path="/about" element = { <AboutPage/> } />
            <Route path="/login" element = { <LoginPage/> } />
            <Route path="/*" element = { <Navigate to={"/about"} /> } ></Route>
        </Routes>
    </>
  )
}
