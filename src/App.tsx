import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Course";
import CoursesPage from "./pages/CoursesPage";
import About from "./pages/course/About";
import Lessons from "./pages/course/Lessons";
import Reviews from "./pages/course/Reviews";
import Creator from "./pages/Creators";
import Not_Found from "./pages/Not_Found";

const App = () => {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#1B3022",
                        color: "#fff",
                        borderRadius: "12px",
                        fontSize: "14px",
                    },
                }}
            />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Products />} />
                    <Route path="courses/:id" element={<CoursesPage />}>
                        <Route
                            index
                            element={<Navigate to="about" replace />}
                        />
                        <Route path="about" element={<About />} />
                        <Route path="lessons" element={<Lessons />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="creators" element={<Creator />} />
                    <Route path="*" element={<Not_Found />} />
                </Route>
                <Route path="*" element={<Not_Found />} />
            </Routes>
        </>
    );
};

export default App;