import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default AppLayout;