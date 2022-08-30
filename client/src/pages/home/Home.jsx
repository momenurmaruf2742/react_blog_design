import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

export default function Home() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts= async
    return () => {
      cleanup
    };
  }, []);
  return (
    
        <>
          <Header/>
          <div className="home">
            <Posts />
            <Sidebar />
          </div>
          
        </>
  )
}
