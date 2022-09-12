import "./sidebar.css"
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInsrance } from "../../config"

export default function Sidebar() {
  const [cats,setCats] = useState([])



  useEffect(() => {
    const getCats = async()=>{
      const res = await axiosInsrance.get("/category")
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, libero porro! Neque porro ducimus, quae ullam delectus mollitia velit consequatur officiis quia perspiciatis voluptatum veritatis! 

        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          {cats.map((c) =>(
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
