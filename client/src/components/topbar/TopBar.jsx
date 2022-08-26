import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;

  return (
    <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
            <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
            <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
            <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ?(
            <img className="topImg" src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" alt="" 
            />

          ):(
            <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login" >LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
            </ul>

          )}
          
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
