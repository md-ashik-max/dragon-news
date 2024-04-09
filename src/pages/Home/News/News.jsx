import { useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSideNavbar from "../../shared/RightSideNavbar/RightSideNavbar";
import Navbar from "../../shared/Navbar/Navbar";


const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h5 className="text-xl font-semibold">Dragon News</h5>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;