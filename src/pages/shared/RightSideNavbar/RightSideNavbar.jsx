import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNavbar = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-xl font-extrabold">Login With</h2>
                <button className="btn w-full text-blue-500 my-2">
                    <FaGoogle className=" text-xl"></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub className="text-xl"></FaGithub>
                    Login With Google
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-extrabold">Find Us On</h2>
               <a href="" className="flex items-center gap-4 mt-6 border-2 p-3 rounded-t-lg font-bold">
                <FaFacebookF className="text-[#3B599C] text-xl"></FaFacebookF>
                Facebook
               </a>
               <a href="" className="flex items-center gap-4 border-x-2 p-3 font-bold">
                <FaTwitter className="text-[#58A7DE] text-xl"></FaTwitter>
                Twitter
               </a>
               <a href="" className="flex items-center gap-4 border-2 p-3 rounded-b-lg font-bold">
                <FaInstagram className="text-[#D82D60] text-xl"></FaInstagram>
                Instagram
               </a>
            </div>
            <div className="p-4 bg-[#F3F3F3]">
                <h2 className="text-xl font-extrabold">Q Zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNavbar;