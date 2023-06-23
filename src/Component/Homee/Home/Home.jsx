
import { Outlet } from "react-router-dom";
import Footer from "../../Shered/Footer/Footer";
import Navber from "../../Shered/Navber/Navber";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;