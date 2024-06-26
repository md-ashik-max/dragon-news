import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className="font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
            <div> 
                <LeftSideNavbar></LeftSideNavbar>
            </div>
            <div className="md:col-span-2">
                {
                    news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                }
            </div>
            <div>
                <RightSideNavbar></RightSideNavbar>
            </div>
            </div> 
        </div>
    );
};

export default Home;