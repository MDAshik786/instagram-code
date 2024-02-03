import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SignupPage from "../Pages/UserPage/UserPage";
import MeassagePage from "../Pages/MessagePage/MeassagePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<SignupPage />} />
      <Route path="/message" element={<MeassagePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
