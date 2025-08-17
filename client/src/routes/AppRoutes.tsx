import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomeMainPage from "../pages/Home/HomeMainPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeMainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
