import "./post.css"

export default function Post({post}) {
  return (
    <div className="post">
        <img className="postImg" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">{post.title}
            </span>
            <hr/>
            <span className="postDate">1 houre ago</span>
          </div>
          <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus natus qui magni sint dolore atque. Fuga, aliquid ipsum! Temporibus quibusdam dolore cupiditate non voluptates, delectus doloribus doloremque ipsa consequatur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur totam nihil! Doloribus quo perspiciatis cum necessitatibus exercitationem minima at. Sapiente, consequuntur tempore. Odit magni vitae nemo numquam modi incidunt.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vitae beatae expedita, fugiat sequi ullam laudantium aliquid provident, voluptates sit dignissimos praesentium voluptate nihil ratione debitis! Modi ab aspernatur enim!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae minima id debitis iste. Laudantium corporis id accusantium, amet officiis facilis libero magni numquam. Corrupti fugiat molestiae consectetur qui incidunt?
          </p>
    </div>
  )
}
