import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="bg-sky-500 flex justify-around py-3">
      <div className=" text-white font-bold flex items-center">Blinkcard</div>
      <nav className=" flex items-center">
            <li className=" list-none mx-3 font-semibold text-white">about</li>
            <li className=" list-none mx-3 font-semibold text-white">features</li>
            <li className=" list-none mx-3 font-semibold text-white">pricing</li>
      </nav>
      <div className="flex items-center">
        <Link to="/signup"><button className=" bg-white rounded-sm font-semibold px-2 my-1">Get started</button></Link>
      </div>
    </div>
  )
}

export default Navbar