import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Signin from "./Signin"

export const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            
                    <div className="  h-screen flex justify-center items-center flex-col">
            <div>
                <h1 className="  text-2xl font-bold">Create Your Own profile site in Minutes</h1>
                <h3 className=" text-center text-2xl font-bold mt-2">No Code Needed</h3>
            </div>
            <div className=" text-center mt-4 mx-32">
                Showcase your photo, bio, and social links with a simple, beautiful personal page — no coding needed. Perfect for students, freelancers, or anyone who wants a quick online presence.
            </div>
            <div>
                <Link to="/signup"><button className="bg-sky-500 text-white px-2 font-semibold text-md py-1 rounded-lg mx-2 mt-2">sign up</button></Link>
               <Link to="/signin"> <button className="bg-sky-500 text-white px-2 font-semibold text-md py-1 rounded-lg mx-2 mt-2">sign in</button></Link>
            </div>
            <div className="mt-20 font-semibold">
                made with ❤️ by <a href="https://x.com/Jaswant23480367">Jaswanth</a>
            </div>
        </div>
        </div>
    )
}
